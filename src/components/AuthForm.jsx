import React from "react";
import "../styles/AuthForm.css"; // Assuming you have a CSS file for styling

const AuthForm = ({ title, children, onSubmit }) => {
  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <h2>{title}</h2>
        <form onSubmit={onSubmit} className="auth-form">
          {children}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
