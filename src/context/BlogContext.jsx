import {createContext, useState} from "react";

// Step 1
export const blogContext = createContext();

const url = `https://codehelp-apis.vercel.app/api/get-blogs`;


export const BlogContextProvider = ({children}) => {

    const [ loading , setLoading] = useState(false);
    const [ posts, setPosts] = useState([]);
    const [ page, setPage] = useState(1);
    const [ totalPages, setTotalPages] = useState(null);

    // Data Fetching
    async function fetchData(page) {
        setLoading(true);
        try {
            const data = await fetch(`${url}?page=${page}`);
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
        setPage(page);
        fetchData(page);
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
