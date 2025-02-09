import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"


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
    <div>
      <form>
        <input
          type="email"
          placeholder="Enter Your Email id"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={Signup}></button>
      </form>
    </div>
  );
}
