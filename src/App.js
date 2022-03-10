// import logo from './logo.svg';
import React from 'react'
import './App.css';
import {Routes, Route} from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home'
import Welcome from './components/users/Welcome'
import Profile from './components/users/Profile'
import CreatePost from './components/posts/CreatePost'
import EditPost from './components/posts/EditPost'
import AllPosts from './components/posts/AllPosts'
import MyPosts from './components/posts/MyPosts'
import CreateBet from './components/bets/CreateBet'
import AllBets from './components/bets/AllBets'
import MyBets from './components/bets/MyBets'
import GameStatus from './components/bets/GameStatus'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/createPost' element={<CreatePost/>}/>
        <Route path='/editPost' element={<EditPost/>}/>
        <Route path='/allPosts' element={<AllPosts/>}/>
        <Route path='/myPosts' element={<MyPosts/>}/>
        <Route path='/createBet' element={<CreateBet/>}/>
        <Route path='/myBets' element={<MyBets/>}/>
        <Route path='/allBets' element={<AllBets/>}/>
        <Route path='/gameStatus/:id' element={<GameStatus/>}/>
     </Routes>
    </div>
  );
}

export default App;
