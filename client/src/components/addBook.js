import axios from "axios";
import React, { useState } from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";





export default function AddBook(props){
    const navigate=useNavigate()
     const[book,newBook]=useState({
        title:"",
        authorname:"",
        about:""
     })
     const handleChange=e =>{
        const{name,value}=e.target
        newBook({
            ...book,
            [name]:value
        })
     }
    const addNewBook=()=>{
        const{title,authorname,about}=book;
        if(title&&authorname&&about){
            axios.post("/api/userRoutes/addbook",book)
            .then((res)=>{
                alert(res.data.message)
                newBook({ title:"",
                authorname:"",
                about:""})
                navigate('/addBook', {replace: true});
            })
            .catch((err)=>{
                console.log(err)
            }
            )
        }
    }

    return(
        <>   
       <Navbar userDetails={props.userDetails} /><br/>
        {/* <div className="fram">
        <div className="login-form">
        <br/>
        <h2 className="text-center">Book Details</h2>       
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Book Title" name="title" value={book.title} onChange={handleChange} required="required"/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="AuthorName" name="authorname" value={book.authorname} onChange={handleChange} required="required"/>
        </div>
        <div class="form-group">
           <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"  name="about" value={book.about} onChange={handleChange} placeholder="About Book"></textarea>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block" onClick={addNewBook} >Add Book</button><br/>
        </div>
      </div>
      </div> */}
     <br/> <br/> <br/>
    <section className="container-fluid">
      {/* row and justify-content-center class is used to place the form in center   */}
    <section className="row justify-content-center">
      <section className="col-12 col-sm-6 col-md-4">
        <div className="form-container fr" >
        <div className="form-group">
          <h4 className="text-center font-weight-bold"><b>ADD NEW BOOK</b> </h4><br/>
          <label htmlFor="booktitle">Book Title</label>
          <input type="text" className="form-control" id="booktitle" name="title" value={book.title} onChange={handleChange} required="required"/>
        </div><br/>
        <div className="form-group">
          <label htmlFor="authorname">Author Name</label>
          <input type="text" className="form-control" id="authorname" name="authorname" value={book.authorname} onChange={handleChange} required="required"/>
        </div><br/>
        <div className="form-group">
          <label htmlFor="aboutbook">About Book</label>
          <textarea class="form-control"  id="aboutbook" rows="5"  name="about" value={book.about} onChange={handleChange} ></textarea>
        </div><br/>
        <div className="form-group">
        <button type="submit" className="btn btn-info btn-block" onClick={addNewBook} style={{color:"white"}}>Add Book</button></div><br/>
        </div>
      </section>
    </section>
  </section>
   

 
        </>
    )
}