import React from "react";
import AuthForm from "./AuthForm";
import Navbar from "./Navbar";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registration submitted");
  };

  return (
    <>
    
    <AuthForm title="Register" onSubmit={handleRegister}>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <input type="password" placeholder="Confirm Password" required />
      <button type="submit">Register</button>
    </AuthForm>
    </>
    
  );
};

export default Register;
