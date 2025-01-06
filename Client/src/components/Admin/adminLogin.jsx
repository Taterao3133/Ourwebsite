import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import {  useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
      e.preventDefault();
   
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Admin logged in!");
      navigate('/adminpanel')
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="lg w-full h-60 ">
        <form onSubmit={handleLogin}>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
        </form>
    </div>
  );
};

export default AdminLogin;
