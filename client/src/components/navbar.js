
import React from "react";
import "./css/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faRightFromBracket, faFilePen, faList, faCirclePlus,faUser,faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Navbar(props){
    const navigate=useNavigate();
    const logout=()=>{
          axios.get("/api/userRoutes/logout")
          .then(res=>{
            window.localStorage.clear();
            navigate("/")
          })
          .catch(err=>{
            alert(err)
          })
    }
    const displayNavbar=(props)=>{ 
       const userdet=JSON.parse(localStorage.getItem("user"))
      
          if( userdet.isAdmin===true){
            return (
            <> 
        
               {/* <ul className="bg">
               <li><Link to="/showUsers"><FontAwesomeIcon icon={ faList} color="white" /> Show Users</Link></li>
               <li><Link to="/addBook"><FontAwesomeIcon icon={faCirclePlus } color="white" /> Add Books</Link></li>
               <li><Link to="/updateprofile"><FontAwesomeIcon icon={faFilePen } color="white" /> Edit Profile</Link></li>
               <li style={{float:"right"}}><a  href="#/"><button onClick={logout}><FontAwesomeIcon icon={faRightFromBracket } color="white" /> logout </button></a></li>
               <li style={{float:"right"}}><a href="#/"><FontAwesomeIcon icon={faUser } color="white" /> {userdet.firstName}</a></li>
              
               </ul> */}
               <nav class="navbar navbar-expand-lg navbar-light bg-dark">
             <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span class="navbar-toggler-icon" ></span> */}
      <FontAwesomeIcon icon={faBars } color="#DFDFDE" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to="/showUsers" class="nav-link" style={{color:"white"}}><FontAwesomeIcon icon={ faList} color="white" /> Show Users</Link>
        </li>
        <li class="nav-item">
        <Link to="/addBook" class="nav-link" style={{color:"white"}}><FontAwesomeIcon icon={faCirclePlus } color="white" /> Add Book</Link>
         
        </li>
        <li class="nav-item">
        <Link to="/updateprofile" class="nav-link" style={{color:"white"}}><FontAwesomeIcon icon={faFilePen } color="white" /> Edit Profile</Link>
        </li>
       
       </ul>
       <ul class="navbar-nav ml-auto" style={{marginLeft:"auto"}}> 
       <li class="nav-item ">
       <a href="#/" style={{color:"white"}}><FontAwesomeIcon icon={faUser } color="white" /> {userdet.firstName}</a>
        </li>
        <li class="nav-item" >
        <a  href="#/" style={{color:"white"}}><button onClick={logout}><FontAwesomeIcon icon={faRightFromBracket } color="white" /> logout </button></a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

            
            </>  
            )
      }
           else{
            return(
             <>
                 {/* <ul className="bg">
               <li><Link to="/showBooks"><FontAwesomeIcon icon={ faList} color="white" /> Show Books</Link></li>
               <li><Link to="/updateprofile"><FontAwesomeIcon icon={faFilePen } color="white" /> Edit Profile</Link></li>
               <li style={{float:"right"}}><a href="#/"><button onClick={logout}><FontAwesomeIcon icon={faRightFromBracket } color="white" /> logout</button></a></li>
               <li style={{float:"right"}}><a class="active" href="#about"><FontAwesomeIcon icon={faUser } color="white" /> {userdet.firstName}</a></li>
               </ul> */}
               <nav class="navbar navbar-expand-lg navbar-light bg-dark">
             <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span class="navbar-toggler-icon" ></span> */}
      <FontAwesomeIcon icon={faBars } color="#DFDFDE" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to="/showBooks" class="nav-link" style={{color:"white"}}><FontAwesomeIcon icon={ faList} color="white" /> Show Books</Link>
        </li>
        <li class="nav-item">
        <Link to="/updateprofile" class="nav-link" style={{color:"white"}}><FontAwesomeIcon icon={faFilePen } color="white" /> Edit Profile</Link>
        </li>
       
       </ul>
       <ul class="navbar-nav ml-auto" style={{marginLeft:"auto"}}> 
       <li class="nav-item ">
       <a href="#/" style={{color:"white"}}><FontAwesomeIcon icon={faUser } color="white" /> {userdet.firstName}</a>
        </li>
        <li class="nav-item" >
        <a  href="#/" style={{color:"white"}}><button onClick={logout}><FontAwesomeIcon icon={faRightFromBracket } color="white" /> logout </button></a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
             </>
            )
           }
    }

    return(
        <>
        {displayNavbar(props)}
        </>
    )
}


export default Navbar