import { gql } from "@apollo/client";
import client from "apollo-client";
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

const fetchPostById = async (slug: string) => {
  const { data } = await client.query({
    query: POST_QUERY,
    variables: { slug },
  });
  return data.post;
};

// Server-side component to fetch data
const SingleBlogPage = async ({ params }: { params: { slug: string } }) => {
  // Await params before using
  const { slug } = await params;

  // Fetch post data server-side
  const post = await fetchPostById(slug);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <section className="container mx-auto max-w-[1480px]">
      {/* Your existing layout here */}
      <div className="blog-image">
        <Image
          alt="Featured Image"
          width={1400}
          height={1000}
          className="mx-auto"
          src={post?.featuredImage?.node?.link || "/"} // Fallback if the image is missing
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

export default SingleBlogPage;
