import React from 'react'
import {Link} from 'react-router-dom'


const AllPosts = () => {
    return (
        <div>
            <h1>All Posts</h1>
            <Link to="/myPosts">My Posts</Link>
            <Link to="/welcome">Go Back</Link>
        </div>
    )
}

export default AllPosts
