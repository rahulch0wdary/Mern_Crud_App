import React from "react";
import "./css/homepage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket,faUserPlus,faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Footer from "./footer";

function Home(){
    return (
        <>
<div className="addimage">

<nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
        <a href="#/" class="navbar-brand" style={{color:"#D5EEBB"}}><b>Welcome to Online BookStore</b></a>
        <button type="button" class="navbar-toggler" style={{color:"white"}} data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            {/* <span class="navbar-toggler-icon" ></span> */}
			<FontAwesomeIcon icon={faBars } color="#D5EEBB" />
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto">
			<Link to="/Login" class="nav-link" style={{color:"#D5EEBB"}}><FontAwesomeIcon icon={faRightToBracket } color="#D5EEBB" /> <b>Login</b></Link>
			<Link to="/Register" class="nav-link" style={{color:"#D5EEBB"}}><FontAwesomeIcon icon={faUserPlus } color="#D5EEBB" /> <b>Register</b></Link>
            </div>
        </div>
    </div>
</nav>
<h1 class="txtover">Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.

<p>--By Charles W. Eliot</p></h1>
</div>
<Footer/>
</>

    )
}

export default Home