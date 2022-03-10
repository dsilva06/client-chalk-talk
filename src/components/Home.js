import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="Home">
            <header className="d-flex justify-content-between">
                <div>
                    <p>Chalk Talk</p>
                </div>
               
                <div>
                     <Link to="/login">Login</Link>
                     <Link to="/signup" className="m-5">Signup</Link>
                </div>
               
            </header>
           
            <div className="container d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="row">
                        <h1>CHALK TALK</h1>
                    </div>
                    <div className="row">
                        <h3>
                            About
                        </h3>
                    </div>
                </div>
               
            </div>
          
        </div>
    )
}

export default Home
