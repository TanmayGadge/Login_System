import React, {useState} from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import './Register.css'; 
import { FaUser, FaLock} from "react-icons/fa";
import {auth} from '../../fireBase';

const SignUp = () => {
  
  //Destructuring Assignment
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUp = (e) =>{

    // e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
  };

  return(
    <div className="wrapper">

      <form onSubmit={SignUp}>

        <h1>Register</h1>

        <div className="input-box">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <FaUser className="icon"/>
        </div>
        
        <div className="input-box">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <FaLock className="icon"/>
        </div>


        <button type="submit">Register</button>
 

      </form>
    </div>
  );
};

export default SignUp;


