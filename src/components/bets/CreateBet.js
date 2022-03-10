import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {post} from '../../https/service'


const CreateBet = () => {
    const publishBet = (e) => {
        e.preventDefault();
        post("/api/bets/create", {
          
        })
          .then((results) => {
            console.log("Bet Created", results.data);
          })
          .catch((err) => {
            console.error(err.message);
          });
      };
    return (
        <div>
            <h1>Create Bet</h1>
            <Link to="/myBets">go back</Link>
            <form>

            </form>
        </div>
    )
}

export default CreateBet
