import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Form, Link } from "react-router-dom";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";


const Register = () => {
    const auth = getAuth(app);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegForm = (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        setSuccess('');
        setError('');

        if(!/(?=.*[!@#$%^&*])/.test(password)){
            setError("Please at least one Special character");
            return;
        }
        else if(password.length < 6){
            setError("password is less than 6 characters")
            return;
        }
        
        createUserWithEmailAndPassword(auth, email, password)

        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('');
            event.target.reset();
            setSuccess("User Create Successfully");
            updateUser(result.user.name)
        })
        .catch(error=>{
            console.log(error.message);
            setError(error.message)
        })

        const updateUser = (user, name) =>{
            updateProfile(user, {
                displayName: name
            })
            .then(() =>{
                console.log("User Name Update");
            })
            .catch(error=>{
                setError(error.message)
            })
        }

    }
  return (
    <div>
    <NavBar></NavBar>
      <div style={{ backgroundColor: "rgb(255 247 237)" }}>
        <div className="w-25 mx-auto p-5 rounded ">
          <h4 className="text-center mb-3">Please Register here</h4>
          <Form onSubmit={handleRegForm}>
            <div className="form-group mb-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
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
                required
              />
              <p className="text-danger">{error}</p>
              <p className="text-success">{success}</p>
            </div>
            <button type="submit" className="btn btn-dark mb-2">
              Register
            </button>
            <p>
              {" "}
              <small>Have you already an account ?</small>{" "}
              <Link to="/login">Login</Link>
            </p>
          </Form>
          
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
