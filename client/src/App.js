import Homepage from "./components/sample";
import './App.css';
import {Routes,Route} from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import {useState,useEffect} from 'react';
import Navbar from "./components/navbar";
import Books from "./components/showBooks";
import Users from "./components/showUsers";
import AddBook from "./components/addBook";
import Home from "./components/homepage";
import ForgotPassword from "./components/forgotPassword";
import  UpdateProfile from "./components/updateprofile";


function App() {
  const [user,setLoginUser] = useState({

  })

  
//   useEffect(()=>{
//     getDetails();
// },[]);
  
  // const getDetails=(user)=>{
  //   axios.get("http://localhost:4000/api/userRoutes/getUser/"+user.username)
  //   .then(res=>{
  //     console.log(res.data.user)
  //     setLoginUser(res.data.user)
  //   })
  // }
 
  return (
    <div>
    <Routes>
      <Route  path="/re" element={<Homepage/>}/>
      {/* <Route path="/" element={ user.isAdmin===true ?<Admin email={user.username}/> :<Homepage email={user.username}/>}/> */}
      <Route path="/Login" element={<Login setLoginUser={setLoginUser}/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/navbar" element={<Navbar userDetails={user}/>}/>
      <Route path="/showBooks" element={<Books userDetails={user}/>}/>
      <Route path="/showUsers" element={<Users userDetails={user}/>}/>
      <Route path="/addBook" element={<AddBook userDetails={user}/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      <Route path="/updateprofile" element={< UpdateProfile userDetails={user}/> }/>

    </Routes>
      
    </div>
  );
}

export default App;
