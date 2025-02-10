import React, { useState } from "react";
import axios from "axios";
import "./Components.css";
import {useNavigate,Link} from "react-router-dom"


export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  async function Signup(e){
    e.preventDefault();

    try{

        await axios.post("http://localhost:5000/Signup",{
            Email,Password
        })
        .then(res=>{
            if(res.data==="exist"){
                alert("User already exist")
            }
            else if(res.data==="notexist"){
                navigate("/")
            }
        })
        .catch(e=>{
            alert("Wrong credentials")
            console.log(e);
        })

    }
    catch(e){
        console.log(e);

    }

}

  return (
    <div className="container">
      <form onSubmit={Signup}>
        <input
          type="email"
          placeholder="Enter Your Email id"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        required/>
        <button type="submit">Sign up</button>
      </form>
      <p>Already have an Account.?? <Link to={'/'}>Login here</Link></p>
    </div>
  );
}
