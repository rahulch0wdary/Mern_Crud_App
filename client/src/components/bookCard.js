import React from "react";
import image from "../images/cover.jpg"
function BookCard(props){
    const book=props.book
    const purchase=()=>{
      alert("Book Purchased")
    }
    return(
        <>
    <div className="list">
      <div class="card" style={{width: "18rem"}}>
      <img class="card-img-top" src={image} style={{height: "15rem"}} alt="hi"/>
      <div class="card-body">
        <h5 class="card-title"><b>{book.title}</b></h5>
        <h6 class="card-text">{book.authorname}</h6>
        <p class="card-text">{book.about}</p>
        <a href="#/" class="btn btn-primary" onClick={purchase}>Purchase</a>
      </div>
    </div>
    </div>
        </>
    )
}
export default BookCard