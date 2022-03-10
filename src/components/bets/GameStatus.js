import React from "react";
import { useEffect } from "react";
import { get } from "../../https/service";
import { useParams } from "react-router-dom";

const GameStatus = () => {
  const [gameTicker, setGameTicker] = React.useState([]);
  const [bet, setBet] = React.useState({});
  const { id } = useParams();
  useEffect(() => {
    get("/api/bets/getAllScores")
      .then((gameDay) => {
        console.log(gameDay.data);
        let game = gameDay.data.filter((singleGame) => {
          return singleGame.id === id;
        });
        setGameTicker(game);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    get(`/api/bets/view-bets/${id}`)
      .then((results) => {
        console.log("my bets", results.data);
        setBet(results.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  function checkBet(){

  }
  return (
    <div>
      {gameTicker.map((ticker) => {
        console.log("ticker", ticker);
        return (
          <div>
            <p>{ticker.completed ? "completed" : "not completed"}</p>
            <p>
              Team Betted on:
              {bet.bettingOnHomeTeam ? bet.homeTeam : bet.awayTeam}
            </p>
            <p> winner:{bet.bettingOnHomeTeam ? bet.homeTeam : bet.awayTeam}</p>
            <p>
              Game Score:{" "}
              {ticker.scores === null ? (
                "No Scores Yet "
              ) : (
                <div>
                  <p>{ticker.scores[0].name}</p>
                  <p>{ticker.scores[0].score}</p>
                  <p>{ticker.scores[1].name}</p>
                  <p>{ticker.scores[1].score}</p>
                </div>
              )}
            </p>
              <button onClick={checkBet}>Check Bet</button>
            
          </div>
        );
      })}
    </div>
  );
};

export default GameStatus;
