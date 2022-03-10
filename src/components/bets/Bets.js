import React from 'react'
import {Link} from 'react-router-dom'



const Bets = ({bet}) => {
    console.log("diego bet",bet)
    return (
        <div style={{border: "solid 1px black"}}>
            <p>Home Team: {bet.homeTeam}</p>
            <p>{bet._id}</p>
            <p>Away Team: {bet.awayTeam}</p>
            <p>Home Team Odds:{bet.homeTeamOdds}</p>
            <p>Away Team Odds:{bet.awayTeamOdds}</p>
            <p>Wager: {bet.wager}</p>
            <p>Team Betted on:{bet.bettingOnHomeTeam  ? bet.homeTeam:bet.awayTeam}</p>
            <Link to={`/gameStatus/${bet.gameId}`}>Check Results</Link>

        </div>
    )
}

export default Bets
