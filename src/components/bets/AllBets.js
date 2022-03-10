import React from 'react'
import {Link} from 'react-router-dom'

const AllBets = () => {
    return (
        <div>
            <h1>All Bets</h1>
            <Link to="/createBet">Create Bet</Link>
        </div>
    )
}

export default AllBets
