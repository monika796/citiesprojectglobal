import { gql } from "@apollo/client";
import client from "apollo-client";
import BlogContent from "@/components/SingleBlogPost";

// Fetch post data from GraphQL
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

// Server Component for the blog details page
const SingleBlogPage = async ({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) => {
  const id = searchParams.id as string | undefined;

  if (!id) {
    return <p className="text-center text-red-500">Invalid Post ID</p>;
  }

  const post = await fetchPostById(id);

  if (!post) {
    return <p className="text-center text-red-500">Post not found</p>;
  }

  return <BlogContent post={post} />;
};

export default SingleBlogPage;
