import React, { useState } from "react";
import { Form, Link, Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import google from "../images/google.png";
import github from "../images/github.jpg";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";


const Login = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app)
    const githubProvider = new GithubAuthProvider();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleWithGoogle = ()=>{
        signInWithPopup(auth, provider)
        .then(result=>{
            const user = result.user
            console.log(user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    const handleWithGithub =()=>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const githubUser = result.user;
            console.log(githubUser);
        })
        .catch(error=>{
        console.log(error.message);
        })
    }

    const handleFormLogin = (event)=>{
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        setError('')
        setSuccess('')
        
        signInWithEmailAndPassword(auth, email, password)

        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('User Login Successfully')
            setError('');
        })
        .catch(error=>{
            setError(error.message)
        })
    }

  return (
    <div style={{ backgroundColor: "rgb(255 247 237)" }}>
      <NavBar></NavBar>

      <div className="mt-5 mb-5 w-25 mx-auto border p-5 rounded">
      <h4 className="text-center text-secondary">Please Login</h4>
        <Form onSubmit={handleFormLogin}>
          <div className="form-group mb-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mb-4">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-dark mb-2">
            Login
          </button>
          <p>
            {" "}
            <small>Do not Have An Account ?</small>{" "}
            <Link to="/register">Register</Link>
          </p>

        </Form>
        <p>{error}</p>
          <p>{success}</p>
        <div>
          <div onClick={handleWithGoogle} className="mb-3">
            <img
              style={{ height: "40px", width: "230px" }}
              className="rounded"
              src={google}
              alt=""
            />
          </div>
          <div onClick={handleWithGithub}>
            <img
              style={{ height: "40px", width: "230px" }}
              className="rounded"
              src={github}
              alt=""
            />
          </div>
        </div>
      </div>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Login;
