import { gql } from "@apollo/client";
import client from "apollo-client";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { notFound } from "next/navigation";
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

async function fetchPostById(slug: string) {
  try {
    const { data } = await client.query({
      query: POST_QUERY,
      variables: { slug },
    });
    return data.post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

const SingleBlogPage = async ({ params }: { params: { slug: string } }) => {
  const post = await fetchPostById(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{post?.title} | My Blog</title>
        <meta name="description" content={post?.content.slice(0, 160)} />
      </Head>
      <section className="container mx-auto max-w-[1480px]">
        {/* Header */}
        <div className="header-section">{/* Header code */}</div>

        {/* Featured Image */}
        <div className="blog-image">
          <Image
            alt="Featured Image"
            width={1400}
            height={1000}
            className="mx-auto"
            src={post?.featuredImage?.node?.link || "/placeholder.jpg"}
            placeholder="blur"
            blurDataURL="/placeholder-blur.jpg"
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
    </>
  );
};

export default SingleBlogPage;
