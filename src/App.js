import React, { useState, useEffect } from "react";
import {Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import LogIn from "./components/Login";
import Signup from "./components/Signup";
import Posts from "./components/Posts";





export default function App() {
  const [token, settoken] = useState("")
 

  return (
    <div>
      <Navbar/>
       <Route exact path="/" component={Home} />
  <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" render={()=>{return <LogIn settoken={settoken}/>}} />
      <Route exact path="/posts" render={()=>{return <Posts token={token}/>}} />
      {/* <Route exact path="/post" component={Home} /> */}
      
    </div>
  );
}


