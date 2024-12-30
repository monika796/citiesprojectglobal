"use client";
import { Suspense } from "react";
import { gql } from "@apollo/client";
import client from "apollo-client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
// GraphQL query for fetching post details
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

interface Post {
  content: string;
  date: string;
  title: string;
  featuredImage: {
    node: {
      link: string;
    };
  };
}

const fetchPostById = async (id: string) => {
  const { data } = await client.query({
    query: POST_QUERY,
    variables: { id },
  });
  return data.post;
};

const SingleBlogPage = async () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  if (!id) {
    return <div>Error: Post ID not found.</div>;
  }

  const post = await fetchPostById(id);

  return (
    <section className="container mx-auto max-w-[1480px]">
      <div className="mx-auto px-4 py-10 md:py-20 flex flex-col md:flex-row justify-between items-center border-b">
        <div className="md:w-3/4 flex gap-3 md:gap-10 flex-col md:flex-row align-start">
          <div className="mb-2">
            <span className="inline-block bg-black text-white text-xs uppercase py-1 px-3 rounded-xl">
              Featured
            </span>
          </div>
          <div>
            <h1 className="text-30px md:text-[64px] font-bold text-gray-900 leading-[30px] md:leading-[77.45px]">
              {post.title}
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
              {new Date(post.date).getDate()}
            </p>
            <p className="text-sm text-gray-500 mt-5">
              {new Date(post.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <div className="blog-image">
        <Image
          alt="Featured Image"
          width={1400}
          height={1000}
          className="mx-auto"
          src={post.featuredImage.node.link || "/"} // Fallback if the image is missing
        />
      </div>
      <div className="blog-content max-w-[684px] mx-auto py-15">
        <div
          className="text-gray-700 mt-2"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />
      </div>
    </section>
  );
};

export default SingleBlogPage;
