import React, { useContext } from "react";
import { blogContext } from "../context/BlogContext";

function Footer() {
  const { totalPages, page, setPage, pagechangeHandler } =
    useContext(blogContext);

  return (
    <div className="flex justify-between items-center p-4 bg-slate-300 w-full">
      <div className="flex gap-2">
        <button
          onClick={() => {
            page === 1 ? pagechangeHandler(totalPages) : pagechangeHandler(page - 1);
          }}
        >
          Prev
        </button>
        <button onClick={() => page === totalPages ? pagechangeHandler(1) : pagechangeHandler(page + 1)}>Next</button>
      </div>
      <p>
      Page {page} of {totalPages}
      </p>
    </div>
  );
}

export default Footer;
