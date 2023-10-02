import React, { useContext } from "react";
import { blogContext } from "../context/BlogContext";
import BlogDetails from "./BlogDetails";

function Main() {
  const { posts, loading } = useContext(blogContext);

  return (
    <div className="w-[350px] flex flex-col gap-4 items-start justify-center-center mt-20 mb-20">
      {loading ? (
        <h1 className="text-2xl text-center">Loading...</h1>
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <BlogDetails key={post.id} post={post} />
        ))
      )}
    </div>
  );
}

export default Main;
// newData.map((e) => e)
