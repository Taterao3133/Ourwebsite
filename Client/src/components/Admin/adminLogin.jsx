import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

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
      navigate("/admin/dashboard"); 
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="lgn w-full bg-[#ffff]">
      <div className="lg w-96 h-60 mx-auto text-center border-2">
        <form className="grid grid-flow-row gap-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border-2 p-3"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border-2 p-3"
          />
          <button type="submit">Login</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
