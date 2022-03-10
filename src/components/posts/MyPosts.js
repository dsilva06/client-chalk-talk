import React from 'react'
import {Link} from 'react-router-dom'
import { get } from "../../https/service";
import { useEffect } from "react";
import Posts from "./Posts";

const MyPosts = () => {
    const [posts, setPosts] = React.useState([]);

    useEffect(() => {
        get("/api/posts/myPosts")
          .then((allPosts) => {
            console.log("bets",allPosts.data);
            return setPosts(allPosts.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);
    
    return (
        <div>
           <h1>My Posts</h1>
           <div>
           {posts.map((post) => {
          return (
            <Posts post={post}/>
          );
        })}
           </div>
        </div>
    )
}

export default MyPosts
