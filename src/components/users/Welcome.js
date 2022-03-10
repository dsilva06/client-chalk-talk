import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { get } from "../../https/service";
import axios from "axios";
import GameCard from '../GameCard'

const Welcome = () => {
  const [games, setGames] = React.useState([]);
  useEffect(() => {
    get("/api/auth/loggedin")
      .then((results) => {
        console.log("You are logged in!!!", results.data);
        // let thing = localStorage.getItem("token");
        // console.log("This was stored in our localStorage", thing);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5005/api/bets/getAllOdds")
      .then((allGames) => {
        console.log(allGames.data);
        return setGames(allGames.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <h1>Welcome</h1>
      <Link to="/profile">Profile</Link>
      <div>
        {games.map((game) => {
          console.log("diego",game)
          return (
            <GameCard game={game}/>
          );
        })}
      </div>
    </div>
  );
};

export default Welcome;
