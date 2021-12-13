import React from 'react'
import { Link  } from "react-router-dom";
import "./navbar.css"

export default function Navbar({token, setToken}) {
    return (
     
               <div  class="topnav">
      {token ? (
        <ul>
      
          <li>
    <Link to="/login" onClick={() => {setToken("") }}>Log Out</Link>
 
              <Link   to="/posts">Posts </Link>
              <Link   to="/AddPost">Add Post </Link>

          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link className="link" to="/login" > Log In </Link>

          </li>
        
        </ul>
        
        
      )}


    </div>
    
    )
}
