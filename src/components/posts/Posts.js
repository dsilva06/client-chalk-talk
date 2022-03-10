import React from 'react'

const Posts = ({post}) => {
    console.log("post",post)
    return (
        <div style={{border:"solid 1px black"}}>
            <p>{post.creator.username}</p>
            <p>{post.text}</p>
        </div>
    )
}

export default Posts
