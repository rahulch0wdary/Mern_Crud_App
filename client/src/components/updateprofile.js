import {  useState } from "react";
import React from "react";
import axios from 'axios'
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";

function UpdateProfile(){
  // console.log(props.userdetails.firstName)
  const navigate=useNavigate()
    const [user,setUser]=useState(
          // firstName:props.userDetails.firstName,
          // lastName:props.userDetails.lastName,
          // username:props.userDetails.username,
          // phonenumber:props.userDetails.phonenumber,
          // address:props.userDetails.address
          JSON.parse(localStorage.getItem('user'))
    );
 
    const handleChange=e=>{
      const{name,value}=e.target
      setUser({
        ...user,
        [name]:value
      })
    }

    
    
// eslint-disable-next-line no-unused-vars
const update=(id,e)=>{
  console.log("1")
    const{firstName,lastName,username,phonenumber,address}=user
   
    if(firstName&& lastName&& username&& phonenumber&&address){
      console.log("2")
      axios.post("/api/userRoutes/updateprofile/"+id,user )
      .then(res=>{
        console.log(res.data.user)
        localStorage.setItem("user",JSON.stringify(res.data.user))
        // setUser(res.data.user)
      console.log("hii");
     
      
      alert(res.data.message)
        
       console.log(user)
      //  const doc=res.data.user
      navigate("/updateprofile")
    window.location.reload();
    }).catch(err=>{
      console.log("e3")
        console.log(err)
    });}
    else{
       alert("invalid input")
    }


   
};
    return(
      <>
    
      <Navbar userDetails={user} />
  
   
<div className="onf">
<section className="container-fluid">
      {/* row and justify-content-center class is used to place the form in center   */}
    <section className="row justify-content-center">
      <section className="col-12 col-sm-6 col-md-4">
        <div className="form-container fr" >
        <div className="form-group">
          <h4 className="text-center font-weight-bold"> UpdateProfile </h4><br/>
          <label htmlFor="InputEmail1">FirstName</label>
           <input type="text" className="form-control" id="InputEmail1" name="firstName" value={user.firstName} onChange={handleChange}/>
        </div><br/>
        <div className="form-group">
          <label htmlFor="InputEmail1">LastName</label>
           <input type="text" className="form-control" id="InputEmail1" name="lastName" value={user.lastName} onChange={handleChange}/>
        </div><br/>
        <div className="form-group">
          <label htmlFor="InputEmail1">Email Address</label>
           <input type="text" className="form-control" id="InputEmail1"name="username" value={user.username} onChange={handleChange}/>
        </div><br/>
        <div className="form-group">
          <label htmlFor="InputEmail1">PhoneNumber</label>
           <input type="text" className="form-control" id="InputEmail1"   name="phonenumber" value={user.phonenumber} onChange={handleChange}/>
        </div><br/>
        <div className="form-group">
          <label htmlFor="InputEmail1">Address</label>
           <input type="text" className="form-control" id="InputEmail1" name="address" value={user.address} onChange={handleChange} />
        </div><br/>
        <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block" onClick={(e) =>update(user._id, e)}>Update</button></div><br/>
        </div>
      </section>
    </section>
  </section>
  </div> 


    
      </>
    )
}
export default UpdateProfile