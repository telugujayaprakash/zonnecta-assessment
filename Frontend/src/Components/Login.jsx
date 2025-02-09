import React, { useState } from "react";
import axios from "axios";
import {useNavigate , Link} from "react-router-dom"

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  async function Login(e){
    e.preventDefault();

    try{

        await axios.post("http://localhost:5000/",{
            Email,Password
        })
        .then(res=>{
            if(res.data==="exist"){
                navigate("/Dashboard")
            }
            else if(res.data==="notexist"){
                alert("User not found")
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
        <button type="submit" onClick={Login}></button>
      </form>
      <p>Don't have Account.?? <Link to={'/Signup'}>Signup here</Link></p>
    </div>
  );
}
