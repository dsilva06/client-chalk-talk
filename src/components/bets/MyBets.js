import React from "react";
import { Link } from "react-router-dom";
import { get } from "../../https/service";
import { useEffect } from "react";
import Bets from "./Bets";

const MyBets = () => {
  const [scores, setScores] = React.useState([]);
  const [bets, setBets] = React.useState([]);
  useEffect(() => {
    get("/api/bets/getAllScores")
      .then((allScores) => {
        console.log(allScores.data);
        setScores(allScores.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    get("/api/bets/myBets")
      .then((allBets) => {
        console.log("bets",allBets.data);
        return setBets(allBets.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <h1>My Bets</h1>
      <div>
      {bets.map((bet) => {
          return (
            <Bets bet={bet}/>
          );
        })}
      </div>
    </div>
  );
};

export default MyBets;
