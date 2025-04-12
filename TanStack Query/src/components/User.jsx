import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

function User() {

    // ############ We Are Doing this Without TanStack ###################
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    //         setData(res.data);
    //     }
    //     fetchData();
    // }, []);

    const fetchData = ()=> {
        return axios.get("https://jsonplaceholder.typicode.com/users")
    }

    const {isError, isLoading, data} =useQuery({
        queryKey:['getUsers'],
        queryFn: fetchData
    });

    if(isLoading){
        return <div>Loading...</div>
    }

    if(isError){
        return <div>Error is occur...</div>
    }

    console.log(data);

    return (
        <>
            <h1>User List</h1>
            <ul>
                {data.data.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}

export default User;