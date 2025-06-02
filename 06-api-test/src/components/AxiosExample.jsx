import React, { useEffect, useState } from 'react'
import axios from "axios";

const AxiosExample = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        const axiosData = async() => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPost(response.data);
            } catch(error) {
                console.error();
            }
        }
        axiosData();
    }, [])
    
  return (
    <div>
      <h2>post-axios</h2>
      <ul>
        {post.map(post => (
            <li>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default AxiosExample
