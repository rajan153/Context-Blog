import React, { useContext } from "react";
import { blogContext } from "../context/BlogContext";

function Footer() {
  const { totalPages, page, pagechangeHandler } =
    useContext(blogContext);

  return (
    <div className="flex justify-between items-center p-4 bg-slate-300 w-full fixed bottom-0">
      <div className="flex gap-2">
        <button
          onClick={() => {
            page === 1
              ? pagechangeHandler(totalPages)
              : pagechangeHandler(page - 1);
          }}
          className="bg-white p-1 rounded-md hover:outline"
        >
          Prev
        </button>
        <button
          onClick={() =>
            page === totalPages
              ? pagechangeHandler(1)
              : pagechangeHandler(page + 1)
          }
          className="bg-white p-1 rounded-md hover:outline"
        >
          Next
        </button>
      </div>
      <p className="bg-white p-1 rounded-sm">
        Page {page} of {totalPages}
      </p>
    </div>
  );
}

export default Footer;
