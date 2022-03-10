import React from "react";
import { post } from "../https/service";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  const [wager, setWager] = React.useState(0);
  const [team, setTeam] = React.useState(false);

  console.log(game);
  const makeBet = (e) => {
    e.preventDefault();
    post("/api/bets/createBet", {
      homeTeam: game.home_team,
      gameId: game.id,
      awayTeam: game.away_team,
      homeTeamOdds: game.bookmakers[0].markets[0].outcomes[0].price,
      awayTeamOdds: game.bookmakers[0].markets[0].outcomes[1].price,
      bettingOnHomeTeam: team,
      wager,
    })
      .then((results) => {
        console.log("Bet Created", results.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  
  return (
    <form onSubmit={makeBet} style={{ border: "solid 1px black", margin:"30px" }}>
      <div>
        <input type="radio" value={"home"} onChange={() => setTeam(true)} />
        <p>{game.home_team} vs. </p>
      </div>
      <div>
        <input
          type="radio"
          value={"away"}
          onChange={() => setTeam(false)}
        ></input>
        <p>
          {game.away_team}@{game.commence_time}
        </p>
      </div>

      <div>
        <p>A:{game.bookmakers[0].markets[0].outcomes[0].name}</p>
        <p>A:{game.bookmakers[0].markets[0].outcomes[0].price}</p>
        <p>A:{game.bookmakers[0].markets[0].outcomes[1].name}</p>
        <p>A:{game.bookmakers[0].markets[0].outcomes[1].price}</p>
      </div>
      <div>
        <label>Wager</label>
        <input
          type="number"
          name="wager"
          value={wager}
          onChange={(e) => setWager(e.target.value)}
        ></input>
        <button type="submit">Make your bet</button>
        {/* <Link to={`/gameStatus/${game.id}`}>Check Results</Link> */}
      </div>
    </form>
  );
};

export default GameCard;
