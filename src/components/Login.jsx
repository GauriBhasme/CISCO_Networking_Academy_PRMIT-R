import React from "react";
import AuthForm from "./AuthForm";
import Navbar from "./Navbar";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <>
    <Navbar></Navbar>
    <AuthForm title="Login" onSubmit={handleLogin}>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </AuthForm>
    </>
    
  );
};

export default Login;
