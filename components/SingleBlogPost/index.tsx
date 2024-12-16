"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PostSlider from "@/components/PostSlider";

// Types for Post Data
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

// Props for the Client Component
interface BlogContentProps {
  post: Post;
}

const BlogContent: React.FC<BlogContentProps> = ({ post }) => {
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
              {post.title}
            </h1>
          </div>
        </div>
        {/* Right Section */}
        <div className="md:w-1/4 flex flex-col items-end md:items-start mt-6 md:mt-0 pl-20 border-l h-[230px]">
          {/* Date */}
          <div className="text-center md:text-left">
            <p className="text-[64px] font-bold text-gray-900">
              {new Date(post.date).getDate()}
            </p>
            <p className="text-sm text-gray-500 mt-5">
              {new Date(post.date).toLocaleDateString()}
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
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <PostSlider />
    </section>
  );
};

export default BlogContent;