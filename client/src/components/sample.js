import axios from 'axios'
import React from 'react'
import { useNavigate } from "react-router-dom";


function Homepage(props) {
    // eslint-disable-next-line no-unused-vars
    const navigate=useNavigate();
    const deleteUser=(id,e)=>{
        axios.delete("/api/userRoutes/deleteUser/"+id)
        .then((res) => {
            console.log(res)
            navigate("/showUsers")
           
        })
        .catch(err=>console.log(err))

    }
  
    var a=0
    const displayNotes=(props)=>{
    const {users}=props;
    const no=Array.from(users)
    return(
    <div>
    <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">No</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      <th scope="col">Address</th>
      <th scope="col">PhoneNumber</th>
      <th scope="col"></th>
    </tr>
  </thead>
 
  <tbody>
  {no.map((user,key,index)=>(
    <tr>
      <th scope="row" key="{user.key}">{a=a+1}</th>
      <td key="{user.firstName}">{user.firstName}</td>
      <td key="{user.lastName}">{user.lastName}</td>
      <td key="{user.email}">{user.username}</td>
      <td key="{user.gender}">{user.gender}</td>
      <td key="{user.address}">{user.address}</td>
      <td key="{user.phonenumber}">{user.phonenumber}</td>
      <td><button type="submit" class="btn btn-danger" onClick={(e) =>deleteUser(user._id, e)}>Delete</button></td>
    </tr>
  
    ))}
  </tbody>
  

</table>
</div>
    )
        }
    
    return(
        <>  
            
            {displayNotes(props)}
        </>
    )
    
    
}
export default Homepage
