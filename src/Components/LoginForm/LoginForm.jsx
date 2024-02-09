import React, {useState} from "react";
import {signInWithEmailAndPassword} from 'firebase/auth';
import './LoginForm.css';
import { FaUser, FaLock} from "react-icons/fa";
import {auth} from '../../fireBase';

const LoginForm = () => {
  
  //Destructuring Assignment
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) =>{

    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => {
      console.log(error);
    });
  };
  return(
    <div className="wrapper">

      <form onSubmit={signIn}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <FaUser className="icon"/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <FaLock className="icon"/>
        </div>

        <div className="remember-forgot">
          <label><input type="checkbox"/>Remember Me </label>
          <a href="#">Forgot Password</a>
        </div>

        <button type="submit">Login</button>
 
        <div className="register-link">
          <p>Don't have an account? <a href="/">Register from the left</a></p>
        </div>

      </form>
    </div>
  );
};

export default LoginForm;


