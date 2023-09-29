import React, { useContext } from "react";
import { blogContext } from "../context/BlogContext";

function Main() {
  const { posts, loading } = useContext(blogContext);

  return (
    <div className="w-[350px] flex flex-col gap-4 items-start justify-center-center">
      {loading ? (
        <h1>Loading...</h1>
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-lg ">{post.title}</p>
            <p className="text-sm mt-[4px]">
              By <span className="italic">{post.author}</span> on{" "}
              <span className="underline font-bold">{post.category} </span>
            </p>
            <p className="text-sm mt-[4px]">Posted on {post.date}</p>
            <p className="text-md mt-[14px]">{post.content}</p>
            <div className="flex gap-x-3">
              {post.tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="text-blue-700 underline font-bold text-xs mt-[5px]"
                  >{` #${tag}`}</span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Main;
// newData.map((e) => e)
