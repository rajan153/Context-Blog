import {createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

// Step 1
export const blogContext = createContext();



export const BlogContextProvider = ({children}) => {
    
    const [ loading , setLoading] = useState(false);
    const [ posts, setPosts] = useState([]);
    const [ page, setPage] = useState(1);
    const [ totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();
    
    // Data Fetching
    async function fetchData(page, tag = null, category) {
        setLoading(true);
        let url = `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`;
        if(tag) {
            url += `&tag=${tag}`;
        }
        if(category) {
            url += `&category=${category}`;
        }
        try {
            const data = await fetch(url);
            const response = await data.json();
            setPosts(response.posts);
            setPage(response.page);
            setTotalPages(response.totalPages)
        }
        catch(e) {
            console.error("Error Aagya Bhai",e);
            setPage(1);
            setPosts([]);
            setTotalPages(null)
        }
        setLoading(false);
    }
    
    function pagechangeHandler(page) {
        navigate({ search: `?page=${page}`})
        setPage(page);
    }



    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchData,
        pagechangeHandler,  
    }


    // Step 2
    return <blogContext.Provider value={value}>
        {children}
    </blogContext.Provider>

}
