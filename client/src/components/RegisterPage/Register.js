import React from "react";
import Title from "../Title";
import { Link } from 'react-router-dom';


export default function Register() {
    return(
        <section className="py-5">
    <div className="row">
      <div className="col-10 mx-auto col-md-6 my-3">
        <Title title="Register" />
        <form className="mt-5">

        
          {/* name */}
          <div className="form-group">
          <label htmlFor="name">Name</label>
            <input
              type="name"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
           {/* email */}
           <div className="form-group">
          <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="email@email.com"
            />
          </div>
          {/* Password */}
          <div className="form-group">
          <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Create Password"
            />
          </div>
            {/* Password2 */}
            <div className="form-group">
          <label htmlFor="password2">Comfirm Password</label>
            <input
              type="password"
              id="password2"
              name="password2"
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Register</button>
          
          
        </form>
        
        <p className="lead mt-4">Have an Account? 
        </p><Link to="/account" className="btn btn-primary">Login</Link>
      </div>
    </div>
  </section>
    );

    
  }

