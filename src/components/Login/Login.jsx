import React from "react";
import { Form, Link, Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Login = () => {
  return (
    <div style={{backgroundColor: "rgb(255 247 237)"}}>
      <NavBar></NavBar>
      <div className="mt-5 mb-5 w-25 mx-auto border p-5 rounded">
        <Form>
          <div className="form-group mb-3">
            <label>Email address</label>
            <input
              type="email"
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
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-dark mb-2">
            Login
          </button>
          <p> <small>Do not  Have An Account ?</small> <Link to="/register">Register</Link></p>
        </Form>
      </div>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Login;
