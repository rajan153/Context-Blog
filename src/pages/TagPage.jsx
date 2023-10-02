import React from "react";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import Main from "../components/Main";
import Header from "../components/Header";

function TagPage() {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    // className="w-full bg-slate-400 text-white p-4 text-2xl font-bold text-center fixed top-0"
    <div className="mt-20 flex flex-col justify-center items-center">
      <Header />
      <button
        className="hover:outline rounded-sm p-1 bg-slate-200"
        onClick={() => {
          navigation(-1);
        }}
      >
        Back
      </button>
      <h2 className="text-xl mt-2">
        Blogs Tagged <span className="font-bold">#{tag}</span>
      </h2>
      <Main />
      <Footer />
    </div>
  );
}

export default TagPage;
