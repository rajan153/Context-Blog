import React from "react";
import { NavLink } from "react-router-dom";

function BlogDetails(props) {
  const post = props.post;
  return (
    <div>
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold">{post.title}</span>
      </NavLink>
      <p>
        By <span className="font-serif">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="font-bold">{post.category}</span>
        </NavLink>
      </p>
      <p className="font-serif">Posted on {post.date}</p>
      <p className="font-light">{post.content}</p>
      <div className="mt-2 font-semibold">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span>{`#${tag}`}</span>{" "}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default BlogDetails;
