import React,{useState,useEffect} from "react";
import BookCard from "./bookCard";
import axios from "axios";
import "./css/showBooks.css"
import Navbar from "./navbar";

// eslint-disable-next-line no-unused-vars
function Books(props){
  const [books,showBook]=useState('');

    useEffect(()=>{
        getAllBooks();
    },[]);


      const getAllBooks=()=>{
        axios.get("/api/userRoutes/showBooks")
        .then((res) => {
        showBook(res.data)
        })
        .catch(err=>console.log(err))
      
    };
    const bookdetails=Array.from(books);
    const booklist=bookdetails.map((book)=>(
      <BookCard book={book} />
    ))
    
    return(
      <>
       <Navbar userDetails={props.userDetails} /><br/>
        <div className="list">
                {booklist}
          </div>
    </>

    )
}


export default Books