import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Posts = ({ userId }) => {
  const { isLoading, error, data } = useQuery(["posts", userId], async () => {
    try {
      const response = await makeRequest.get(`/posts?userId=${userId}`);
      return response.data;
    } catch (err) {
      console.error("Error fetching posts:", err.message);
      throw err; // Rethrow the error to be caught by the useQuery hook
    }
  });

  console.log("isLoading:", isLoading);
  console.log("error:", error);
  console.log("data:", data);

  return (
    <div className="posts">
      {error ? (
        <p>Something went wrong!</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        data.map((post) => <Post post={post} key={post.id} />)
      )}
    </div>
  );
};

export default Posts;
