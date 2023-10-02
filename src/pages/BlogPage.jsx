import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { blogContext } from "../context/BlogContext";
import BlogDetails from "../components/BlogDetails";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Header from "../components/Header";

function BlogPgae() {
  const [blog, setBlog] = useState(null);
  const [relatedBlog, setRelatedBlog] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { setLoading, loading } = useContext(blogContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlog() {
    setLoading(true);
    const newBaseUrl = `https://codehelp-apis.vercel.app/api/`;
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      setBlog(data.blog);
      setRelatedBlog(data.relatedBlogs);
    } catch (error) {
      console.error("Bhai Blog me Error Aagya", error);
      setBlog(data.blog);
      setRelatedBlog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlog();
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-20 mb-20 ">
      <Header />
      <div>
        <button
          className="hover:outline rounded-sm p-1 bg-slate-200"
          onClick={() => {
            navigation(-1);
          }}
        >
          Back
        </button>
      </div>
      {loading ? (
        <h2>Loading...</h2>
      ) : blog ? (
        <div className="w-[350px]">
          <BlogDetails post={blog} />
          <h2 className="mt-11 mb-10 font-extrabold text-2xl">Related Blogs</h2>
          {relatedBlog.map((post) => (
            <div key={post.id}>
              <BlogDetails post={post} />
            </div>
          ))}
        </div>
      ) : (
        <h2>No data Found</h2>
      )}
    </div>
  );
}

export default BlogPgae;
