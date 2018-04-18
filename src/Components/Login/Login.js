import React from "react";
import "./Login.css";

const Login = () => (
  <div>
    <p className="logo">VENT</p>
    <a href={process.env.REACT_APP_LOGIN}>
      <button>Login</button>
    </a>
  </div>
);

export default Login;
