import React, { useEffect } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

function ApiRequest() {

  // useEffect(()=> {
  //   const deleteData = async ()=> {
  //     const response = await axios.delete("https://dummyjson.com/products/1",{
  //       // title: "iPhone 20 pro",
  //       // description: "something",
  //       // price: 1232234,
  //       // discountPercentage: 30,
  //       // headers: {'Content-Type': 'application/json'}
  //     })
  //     console.log(response)
  //   }

  //   deleteData();
  // },[])

  const postData = ()=> {
    return axios.post("https://jsonplaceholder.typicode.com/posts",
      {
        title: "Mutations"
      });
  }

  const mutation = useMutation({
    mutationFn: postData,
    mutationKey: ["mutationPost"],
    onSuccess: (data) => {
      console.log("Post created successfully", data)
    }
  });

  return (
    <>
      <h3>Mutation</h3>
      <button
      onClick={()=>{mutation.mutate()}}
      >Trigger Mutation</button>
    </>
  );
}

export default ApiRequest;
