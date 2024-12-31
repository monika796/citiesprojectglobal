import { gql } from "@apollo/client";
import client from "apollo-client";
import Link from "next/link";
import Image from "next/image";
import BlogCustomSlider from "@/components/BlogPostSlider";
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

// Define the GraphQL query
const POST_QUERY = gql`
  query ($slug: ID!) {
    post(id: $slug, idType: SLUG) {
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

// Fetch post by slug
const fetchPostById = async (slug: string) => {
  const { data } = await client.query({
    query: POST_QUERY,
    variables: { slug },
  });
  return data.post;
};

const SingleBlogPage = async ({ params }: { params: { slug: string } }) => {
  // Fetch the post using the slug
  const post = await fetchPostById(params.slug);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <section className="container mx-auto max-w-[1480px]">
      <div className="mx-auto px-4 py-10 md:py-20 flex flex-col md:flex-row justify-between items-center border-b">
        {/* Left Section */}
        <div className="md:w-3/4 flex gap-3 md:gap-10 flex-col md:flex-row align-start">
          {/* Featured Badge */}
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

        {/* Right Section */}
        <div className="md:w-1/4 w-full flex flex-col items-start md:items-start mt-6 md:mt-0 pl-0 md:pl-20 border-unset md:border-l h-auto md:h-[230px]">
          {/* Date */}
          <div className="text-center md:text-left mt-10 md:mt-0">
            <p className="text-[64px] font-bold text-gray-900">
              {new Date(post.date).getDate()}
            </p>
            <p className="text-sm text-gray-500 mt-5">
              {new Date(post.date).toLocaleDateString()}
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <Link href="https://www.facebook.com/CitiesProjectGlobal/" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">Facebook</span>
              {/* Facebook SVG icon */}
            </Link>
            <Link href="https://www.linkedin.com/company/citiesprojectglobal" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">LinkedIn</span>
              {/* LinkedIn SVG icon */}
            </Link>
            <Link href="https://www.instagram.com/citiesprojectglobal/" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">Instagram</span>
              {/* Instagram SVG icon */}
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="blog-image">
        <Image
          alt="Featured Image"
          width={1400}
          height={1000}
          className="mx-auto"
          src={post?.featuredImage?.node?.link || "/placeholder.jpg"} // Fallback image if the link is missing
        />
      </div>

      {/* Post Content */}
      <div className="blog-content max-w-[684px] mx-auto py-15">
        <div
          className="text-gray-700 mt-2"
          dangerouslySetInnerHTML={{ __html: post?.content || "" }}
        />
      </div>

      {/* Custom Blog Slider */}
      <BlogCustomSlider />
    </section>
  );
};


export default SingleBlogPage;
