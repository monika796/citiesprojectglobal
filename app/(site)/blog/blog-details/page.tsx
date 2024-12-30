"use client";

import { Suspense, useState, useEffect } from "react";
import { gql } from "@apollo/client";
import client from "apollo-client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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

// GraphQL query to fetch the post by ID
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

// Function to fetch post data
const fetchPostById = async (id: string): Promise<Post> => {
  const { data } = await client.query({
    query: POST_QUERY,
    variables: { id },
  });
  return data.post;
};

// Custom hook to manage fetching post data with a return type
interface UseFetchPostResult {
  post: Post | null;
  loading: boolean;
  error: string | null;
}

const useFetchPost = (id: string | null): UseFetchPostResult => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { 
  if (!id) {
    return ;
  }

    const fetchData = async () => {
      try {
        const fetchedPost = await fetchPostById(id);
        setPost(fetchedPost);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
 // Only run when `id` changes
}, [id]);
  return { post, loading, error };
};

const SingleBlogPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { post, loading, error } = useFetchPost(id);

  if (loading) return <p></p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="container mx-auto max-w-[1480px]">
      {/* Header Section */}
      <div className="mx-auto px-4 py-10 md:py-20 flex flex-col md:flex-row justify-between items-center border-b">
        <div className="md:w-3/4 flex gap-3 md:gap-10 flex-col md:flex-row align-start">
          <div className="mb-2">
            <span className="inline-block bg-black text-white text-xs uppercase py-1 px-3 rounded-xl">
              Featured
            </span>
          </div>
          <div>
            <h1 className="text-30px md:text-[64px] font-bold text-gray-900 leading-[30px] md:leading-[77.45px]">
              {post?.title}
            </h1>
            <p className="text-gray-700 mt-4 text-[16px] md:text-[24px] max-w-[543px]">
              You don’t have to search the Bible for very long to find passages
              highlighting the value and importance of community.
            </p>
          </div>
        </div>
        <div className="md:w-1/4 w-full flex flex-col items-start md:items-start mt-6 md:mt-0 pl-0 md:pl-20 border-unset md:border-l h-auto md:h-[230px]">
          <div className="text-center md:text-left mt-10 md:mt-0">
            <p className="text-[64px] font-bold text-gray-900">
              {post ? new Date(post.date).getDate() : ""}
            </p>
            <p className="text-sm text-gray-500 mt-5">
              {post ? new Date(post.date).toLocaleDateString() : ""}
            </p>
          </div>
          <div className="flex space-x-4 mt-4">
            <Link
              href="https://www.facebook.com/CitiesProjectGlobal/"
              className="text-gray-500 hover:text-gray-900"
            >
              <span className="sr-only">Facebook</span>
              {/* Facebook SVG */}
            </Link>
            <Link
              href="https://www.linkedin.com/company/citiesprojectglobal"
              className="text-gray-500 hover:text-gray-900"
            >
              <span className="sr-only">LinkedIn</span>
              {/* LinkedIn SVG */}
            </Link>
            <Link
              href="https://www.instagram.com/citiesprojectglobal/"
              className="text-gray-500 hover:text-gray-900"
            >
              <span className="sr-only">Instagram</span>
              {/* Instagram SVG */}
            </Link>
          </div>
        </div>
      </div>
      {/* Featured Image Section */}
      <div className="blog-image">
        <Image
          alt="Featured Image"
          width={1400}
          height={1000}
          className="mx-auto"
          src={post?.featuredImage?.node?.link || "/"}
        />
      </div>
      {/* Blog Content */}
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

// Page wrapper with Suspense fallback
const PageWrapper = () => (
  <Suspense fallback={<p></p>}>
    <SingleBlogPage />
  </Suspense>
);

export default PageWrapper;
