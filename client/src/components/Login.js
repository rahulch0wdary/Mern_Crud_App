import React, { useState } from "react";
import "./css/Login.css";
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";

const Login= ({setLoginUser})=>{
    const navigate=useNavigate();
    const [user,setUser]=useState({
        username:"",
        password:""
    })
    const handleChange=e =>{
       const {name,value}=e.target
       setUser({
        ...user,
        [name]:value
       })
    }


// eslint-disable-next-line no-unused-vars
const login=() =>{
    console.log("hii")
    const {username,password}=user
    if(username && password){
    axios.post("/api/userRoutes/Login",user)
    .then(res=>{

    console.log(res.data.user)
    if(res.data.message==="login successfull"){
        alert(res.data.message)
        setLoginUser(res.data.user)
        localStorage.setItem("user",JSON.stringify(res.data.user))
        navigate("/navbar")
    }
    else{
        alert("Invalid Credentials")
        navigate("/Login")
    }
   
})
.catch((err)=>{
alert(err.data.message)
navigate("/Login")})
    }
    else{
        alert("enter the values")
    }
}
    return (
        <>
         <div className="ond">
<section className="container-fluid">
      {/* row and justify-content-center class is used to place the form in center   */}
    <section className="row justify-content-center">
      <section className="col-12 col-sm-6 col-md-4">
        <div className="form-container fr" >
        <div className="form-group">
          <h4 className="text-center font-weight-bold"> Login </h4><br/>
          <label htmlFor="InputEmail1">Email Address</label>
           <input type="text" className="form-control" id="InputEmail1"  placeholder="Enter email" name="username"  value={user.username} onChange={handleChange} required="required"/>
        </div><br/>
        <div className="form-group">
          <label htmlFor="InputPassword1">Password</label>
          <input type="password" className="form-control" id="InputPassword1" placeholder="Password" name="password" value={user.password} onChange={handleChange} required="required"/>
        </div><br/>
        <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block" onClick={login}>Log In</button></div><br/>
        <div className="form-footer">
          {/* <p> Don't have an account? <a href="#/">Sign Up</a></p> */}
          <div className="row">
                <div className="col-md-6 ">
                <p> Don't have an account? <Link to="/Register">Sign Up</Link></p> 
                </div>
                <div className="col-md-6">
                <Link to="/forgotpassword">Forgot Password?</Link>  
                </div>
              </div>
        </div>
        </div>
      </section>
    </section>
  </section>
  </div> 
        </>
    )
}

export default Login