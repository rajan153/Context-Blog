import React from "react";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import Main from "../components/Main";
import Header from "../components/Header";

function CategoryPage() {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    // className="flex flex-col items-center justify-center gap-8 mt-20"
    <div className="flex flex-col items-center justify-center mt-20">
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
        <h2 className="font-bold text-xl mt-1">
          Blog on <span>{category}</span>
        </h2>
      </div>{" "}
      <Main />
      <Footer />
    </div>
  );
}

export default CategoryPage;
