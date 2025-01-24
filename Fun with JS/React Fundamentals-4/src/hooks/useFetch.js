import { useEffect, useState } from "react";

export function usePostTitle(){
    const [post, setPost] = useState({});

    async function getPosts(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const json = await response.json();
    setPost(json);
    }

    useEffect(()=>{
        getPosts();
    },[])

    return post.title;
}

export function useFetch(url, reFetchTime){

    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function getDetails(){
        setLoading(true);
        setError(null);
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Network response was not ok");
            }
            const json = await response.json();
            setFinalData(json);
        }catch(err){
            setError(err.message);
        } finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        getDetails();
    }, [url]);

    // Re-Fetching the Data every 10s.
    useEffect(()=>{
        const interval = setInterval(getDetails, reFetchTime)

        return () => clearInterval(interval);

    },[reFetchTime]);

    return {
        finalData,
        loading,
        error
    };

}
