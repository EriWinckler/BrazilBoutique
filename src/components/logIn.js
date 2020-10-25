import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // Logged in successfully, redirect to home
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // Created a user and Logged in, redirect to Home
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <section id="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg"
          alt="Flag of Brazil"
          className="loginLogo"
        />
      </Link>

      <div className="loginContainer">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          ></input>
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          ></input>
          <button onClick={login} type="submit" className="loginSignInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to Brazil Boutique's Conditions of Use & Sale.
          Please see our Privacy Notice.
        </p>

        <button onClick={register} className="loginRegisterButton">
          Create Account
        </button>
      </div>
    </section>
  );
};

export default Login;
