import axios from "axios";
import React, {useState,useEffect } from "react";
import Homepage from "./sample";
import Navbar from "./navbar";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Users(props){
   const [users,setUsers]=useState('');
   const [pagenumber,newPageNumber]=useState(1);
  //  const [limit,newLimit]=useState('');
  // const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    console.log(value)
    newPageNumber(value);
  };
    useEffect(()=>{
        getAllUsers();
    },[users]);
  
    
      const getAllUsers=()=>{
        axios.get("/api/userRoutes/showUsers",{params:{pagenumber}})
        .then((res) => {
        setUsers(res.data.results)
        })
        .catch(err=>console.log(err))
      
    };
    const thiss=(val)=>{
      console.log("hi")
      console.log(val)
      newPageNumber(val)
      getAllUsers()
      // newPageNumber(e.target.value)
      // getAllUsers()
    }


    return (
    <>
       <Navbar userDetails={props.userDetails} /><br/>
       
          {/* <div> */}
            {/* <input type="text" placeholder="enter the page number" name="pagenumber" value={pagenumber} onChange={e => newPageNumber(e.target.value)}/> */}
            {/* <input type="text" placeholder="enter the limit" name="pagenumber" value={limit} onChange={e => newLimit(e.target.value)}/> */}
            {/* <label for="cars">No of Entries</label>
            <select name="cars" id="cars" onChange={e => newLimit(e.target.value)}>
              <option value="10">10</option>
              <option value="100">100</option>
              <option value="150">150</option>
              <option value="200">200</option>
              <option value="250">250</option>
            </select>
            <button type="submit" onClick={getAllUsers} class="btn btn-primary" value="Submit"><FontAwesomeIcon icon={faCheck } color="white" /></button>
          </div><br/> */}
         <Homepage users={users}/> 
        
      <Stack spacing={2} >
      <Typography>Page: {pagenumber}</Typography>
      <Pagination count={101} page={pagenumber}  onChange={handleChange} color="primary"   size="large"/>
    </Stack>
   

    </>
    )
}

