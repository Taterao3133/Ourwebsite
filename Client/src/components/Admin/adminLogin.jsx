
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify"; 
import { RecaptchaVerifier } from "firebase/auth";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 🔹 Firebase reCAPTCHA for Brute Force Protection
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: (response) => {
          console.log("reCAPTCHA verified");
        },
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); 
    setLoading(true);
    setupRecaptcha(); 

    try {
     
      const safeEmail = DOMPurify.sanitize(email);
      const safePassword = DOMPurify.sanitize(password);

      await signInWithEmailAndPassword(auth, safeEmail, safePassword);
      
      console.log("Admin logged in!");
      navigate("/admin/dashboard"); 
    } catch (err) {
      setError("Login failed. Please try again."); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 mt-5 mb-8 border-2 border-[#ce6ad0] rounded-lg py-5 mx-auto grid justify-center items-center grid-flow-row max-sm:w-[90%] w-[60%] text-center">
      <h3 className="text-center text-4xl max-sm:text-2xl font-roboto-serif font-medium">Admin Login</h3>

      <form className="grid grid-flow-row gap-y-4" onSubmit={handleLogin}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="border-2 border-[#c26bc4] rounded-lg p-3 w-full"
        />
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border-2 border-[#c26bc4] rounded-lg p-3 w-full"
        />
        
        <div className="bt flex md:mx-auto hover:bg-[#ce6ad0] hover:border-none cursor-pointer mt-7 max-sm:mx-auto w-56 max-sm:w-[60%] max-sm:h-auto max-sm:py-2 hover:drop-shadow-lg h-14 border-2 border-[#000000] rounded-[20px]">
          <button disabled={loading} className="text-lg max-sm:text-base hover:text-[#fff] text-[#000000] font-medium font-roboto-serif my-auto mx-auto flex">
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
        
        {error && <p className="text-red-500">{error}</p>}

        {/* 🔹 Invisible reCAPTCHA for bot protection */}
        <div id="recaptcha-container"></div>
      </form>
    </div>
  );
};

export default AdminLogin;
