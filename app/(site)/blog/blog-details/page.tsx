"use client";

import { Suspense, useState, useEffect } from "react";
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import Link from "next/link";
import Image from "next/image";
import { gql } from "@apollo/client";
import client from "apollo-client";
import { useSearchParams } from "next/navigation";
import BlogCustomSlider from "@/components/BlogPostSlider";

// Define types for the post data
interface FeaturedImage {
  node: {
    link: string;
  };
}

interface Post {
  content: string;
  date: string;
  title: string;
  featuredImage: FeaturedImage;
}

const fetchPostById = async (id: string) => {
  const POST_QUERY = gql`
    query ($id: ID!) {
      post(id: $id) {
        content
        date
        title
        featuredImage {
          node {
            link
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query: POST_QUERY,
    variables: { id },
  });
  return data.post;
};

const SingleBlogPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Retrieve the 'id' query param

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const fetchedPost = await fetchPostById(id);
          setPost(fetchedPost);
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]); // Only run when 'id' changes

  if (loading) {
    return ;
  }

  if (error) {
    return;
  }

  return (
    <section className="container mx-auto max-w-[1480px]">
      <div className="mx-auto px-4 py-20 flex flex-col md:flex-row justify-between items-center border-b">
        {/* Left Section */}
        <div className="md:w-3/4 flex gap-10 flex-col md:flex-row align-start">
          {/* Featured Badge */}
          <div className="mb-2">
            <span className="inline-block bg-black text-white text-xs uppercase py-1 px-3 rounded-xl">
              Featured
            </span>
          </div>
          <div>
            <h1 className="text-3xl md:text-[64px] font-bold text-gray-900 leading-[77.45px]">
              {post?.title || "Loading..."}
            </h1>
            <p className="text-gray-700 mt-4 text-[24px] max-w-[543px]">
              You don’t have to search the Bible for very long to find passages
              highlighting the value and importance of community.
            </p>
          </div>
        </div>
        {/* Right Section */}
        <div className="md:w-1/4 flex flex-col items-end md:items-start mt-6 md:mt-0 pl-20 border-l h-[230px]">
          {/* Date */}
          <div className="text-center md:text-left">
            <p className="text-[64px] font-bold text-gray-900">
              {post ? new Date(post.date).getDate() : ""}
            </p>
            <p className="text-sm text-gray-500 mt-5">
              {post ? new Date(post.date).toLocaleDateString() : ""}
            </p>
          </div>
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">Facebook</span>
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">LinkedIn</span>
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">Instagram</span>
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="blog-image">
        <Image
          alt="Featured Image"
          width={1400}
          height={1000}
          className="mx-auto"
          src={post?.featuredImage?.node?.link || "/blod-banner.png"} // Fallback if the image is missing
        />
      </div>
      <div className="blog-content max-w-[684px] mx-auto py-15">
        <div
          className="text-gray-700 mt-2"
          dangerouslySetInnerHTML={{ __html: post?.content || "" }}
        />
      </div>
      <BlogCustomSlider />
    </section>
  );
};

// Wrapping the component with Suspense
const PageWrapper = () => {
  return (
    <Suspense >
      <SingleBlogPage />
    </Suspense>
  );
};

export default PageWrapper;
