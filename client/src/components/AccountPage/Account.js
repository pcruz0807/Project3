import React from "react";
import Title from "../Title";
import { Link } from 'react-router-dom';



export default function Account() {
         return(
         <section className="py-5">
         <div className="row">
           <div className="col-10 mx-auto col-md-6 my-3">
         <Title title="Sign in" />
        <form>
        
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
              placeholder="Enter Password"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
          
          
        </form>
       
        <p className="lead mt-4">No account? 
        </p> <Link to="/register" className="btn btn-primary">Register</Link>
      </div>
    </div>
  </section>);
          
}


    




