import React, { useState} from "react";
import "./css/Register.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Register=()=>{
   const navigate=useNavigate();
    const [user,setUser]=useState({
          firstName:"",
          lastName:"",
          username:"",
          gender:"",
          phonenumber:"",
          address:"",
          password:""
    })
    const handleChange=e=>{
      const{name,value}=e.target
      setUser({
        ...user,
        [name]:value
      })
    }
  //   useEffect(()=>{
  //     register();
  // },[user]);
// eslint-disable-next-line no-unused-vars
const register=()=>{
    const{firstName,lastName,username,gender,phonenumber,address,password}=user
    if(firstName&& lastName&& username&& gender&& phonenumber&&address&&password){
      axios.post("/api/userRoutes/register",user )
      .then((res)=>{
      
       alert(res.data.message)
        setUser({
          firstName:"",
          lastName:"",
          username:"",
          gender:"",
          phonenumber:"",
          address:"",
          password:""
        })
      navigate("/Login")
    }).catch(err=>{
        console.log(err)
    }) };
   
    


};
    return (
        <>

<div className="ons">
<section className="container-fluid">
      {/* row and justify-content-center class is used to place the form in center   */}
    <section className="row justify-content-center">
      <section className="col-12 col-sm-6 col-md-4">
        <div className="form-container fr" >
        <div className="form-group">
          <h4 className="text-center font-weight-bold"> Registration Form </h4><br/>
          <label htmlFor="InputEmail1">FirstName</label>
           <input type="text" className="form-control" id="InputEmail1" name="firstName" value={user.firstName} onChange={handleChange} required/>
        </div><br/>
        <div className="form-group">
          <label htmlFor="InputEmail1">LastName</label>
           <input type="text" className="form-control" id="InputEmail1" name="lastName" value={user.lastName} onChange={handleChange} required/>
        </div><br/>
        <div className="form-group">
          <label htmlFor="InputEmail1">Email Address</label>
           <input type="text" className="form-control" id="InputEmail1"name="username" value={user.username} onChange={handleChange} required/>
        </div><br/>
        <div className="form-group">
          <label htmlFor="InputEmail1" style={{ paddingRight:"10px"}}>Gender:</label>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="femaleGender"
                     name="gender" value="female" onChange={handleChange}  />
                    <label className="form-check-label" htmlFor="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="maleGender"
                     name="gender" value="male" onChange={handleChange} />
                    <label className="form-check-label" htmlFor="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="otherGender"
                     name="gender" value="others" onChange={handleChange} />
                    <label className="form-check-label" htmlFor="otherGender" >Other</label>
                  </div>

        </div><br/>
        <div className="form-group">
          <label htmlFor="InputEmail1">PhoneNumber</label>
           <input type="text" className="form-control" id="InputEmail1"   name="phonenumber" value={user.phonenumber} onChange={handleChange} required/>
        </div><br/>
        <div className="form-group">
          <label htmlFor="InputEmail1">Address</label>
           <input type="text" className="form-control" id="InputEmail1" name="address" value={user.address} onChange={handleChange} required/>
        </div><br/>
        <div className="form-group">
          <label htmlFor="InputPassword1">Password</label>
          <input type="password" className="form-control" id="InputPassword1"  name="password" value={user.password} onChange={handleChange} />
        </div><br/>
        <div className="form-group">
          <label htmlFor="InputPassword1">Confirm Password</label>
          <input type="password" className="form-control" id="InputPassword1" />
        </div><br/>
        <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block" onClick={register}>Register</button></div><br/>
        </div>
      </section>
    </section>
  </section>
  </div> 



        </>
    )
}


export default Register;