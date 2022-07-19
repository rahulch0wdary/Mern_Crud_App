import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./css/forgotpassword.css"
function ForgotPassword(){
    const navigate=useNavigate();
    const [newPassword,setNewPassword]=useState({
        username:'',
        password:''
    });
    const handleChange=e=>{
        const {name,value}=e.target
        setNewPassword({
            ...newPassword,
            [name]:value
        })
    }
    const changePassword=()=>{
        axios.put("/api/userRoutes/updatepassword",newPassword)
        .then(res=>{
            alert(res.data.message)
            setNewPassword(res.data.newPassword)
            navigate("/Login")
            

        })
        .catch(err=>{
            alert(err)
        })
    }
    return(
        // <div className="fram">
        // <div className="login-form">
        // <br/>
        // <h2 className="text-center">Reset Password</h2>       
        // <div className="form-group">
        //     <input type="text" className="form-control" placeholder="enter email" name="username" value={newPassword.username} onChange={handleChange}  required="required"/>
        // </div>
        // <div className="form-group">
        //     <input type="text" className="form-control" placeholder="enter new Password" name="password" value={newPassword.password} onChange={handleChange} required="required"/>
        // </div>
        // <div className="form-group">
        //     <input type="text" className="form-control" placeholder="confirm password" name="confirmpassword"  required="required"/>
        // </div>
        // <div className="form-group">
        //     <button type="submit" className="btn btn-primary btn-block" onClick={changePassword}>Update Password</button><br/>
        // </div>
        // </div>
        // </div>

        <>
        <div className="ond">
         <section className="container-fluid">
      {/* row and justify-content-center class is used to place the form in center   */}
    <section className="row justify-content-center">
      <section className="col-12 col-sm-6 col-md-4">
        <div className="form-container fr" >
        <div className="form-group">
          <h4 className="text-center font-weight-bold"> Forgot Password </h4><br/>
          <label htmlFor="InputEmail1">Email Address</label>
           <input type="text" className="form-control" id="InputEmail1"  placeholder="Enter email" name="username" value={newPassword.username} onChange={handleChange}  required="required"/>
        </div><br/>
        <div className="form-group">
          <label htmlFor="InputPassword1">Password</label>
          <input type="password" className="form-control" id="InputPassword1" placeholder="Password" name="password" value={newPassword.password} onChange={handleChange} required="required"/>
        </div><br/>
        <div className="form-group">
          <label htmlFor="InputPassword1">Confirm Password</label>
          <input type="password" className="form-control" id="InputPassword1" placeholder="Confirm Password" name="password" />
        </div><br/>
        <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block" onClick={changePassword}>submit</button></div><br/>
        </div>
      </section>
    </section>
  </section>
  </div> 
        </>

    )
}

export default ForgotPassword