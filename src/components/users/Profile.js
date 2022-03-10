import React from 'react'
import {Link} from 'react-router-dom'


const Profile = () => {
    return (
        <div>
            <h1>PROFILE</h1>
            <Link to="/myPosts">My Posts</Link>
            <Link to="/myBets">My Bets</Link>
            <Link to="/welcome">Go Back</Link>
        </div>
    )
}

export default Profile
