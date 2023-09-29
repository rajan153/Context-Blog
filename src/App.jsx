import { useContext, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { blogContext } from "./context/BlogContext";

function App() {
  const { fetchData } = useContext(blogContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="w-full bg-slate-400 text-white p-4 text-2xl font-bold text-center">
        Blog Site
      </h1>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
