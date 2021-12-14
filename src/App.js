import React, { useState, useEffect } from "react";
import {Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import LogIn from "./components/Login";
import Signup from "./components/Signup";
import Posts from "./components/Posts";
import Likes from "./components/Likes";
// import AddPost from "./components/Addpost";
import AddPost from "./components/AddPost";


export default function App() {
  const [token, setToken] = useState("")

  return (
    <div>
      <Navbar setToken={setToken} token={token} />
       <Route exact path="/" component={Home} />
  <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" render={()=>{return <LogIn setToken={setToken}/>}} />
      <Route exact path="/posts" render={()=>{return <Posts token={token}/>}} />
      <Route path="/AddPost" exact render={()=>{return <AddPost token={token}/>}} />
      {/* <Route  exact path="/posts" render={() => { return < AddPost token={token} />;}} /> */}
      
    </div>
  );
}


