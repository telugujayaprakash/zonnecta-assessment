import React from 'react'
import "./Components.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className='main'>
      <div className='home'>
      <h1 className=''>Zoonecta</h1>
      <button className='home-btn'><Link to={"/"}>Logout</Link></button>
      </div>
      <h1 ><b>Welcome To Dashboard</b></h1>
    </div>
  )
}

