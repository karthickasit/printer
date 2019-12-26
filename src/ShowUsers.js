import React,{Component} from 'react';
import axios from 'axios';
import Dashboard from './dashboard';
//import {NavLink} from 'react-router-dom';

class ShowUsers extends Component {
 state={
   retrieved:[]
 }
componentWillMount()
{
  axios.get("http://localhost:5000/getcustomers").then(
    res=>{
      console.log(res.data.data);
      this.setState({
        retrieved:res.data.data
      })
    localStorage.setItem("customerdata",JSON.stringify(res.data.data)); 
    }
  ).catch(err=>console.log(err));
      
}

render(){
  return (
    <div>
      <Dashboard/>
     <h1>welcome to ShowUsers Page</h1> 

<table> 
  <thead>
  <tr>
    
    <th>customerId</th>
    <th>customerName</th>
    <th>Date of Reg</th>
   
    <th>contactPerson</th>
    <th>address</th>
    <th>Email</th>
    </tr>
  </thead>
  <tbody>
  {this.state.retrieved.map((value,i)=>{

 return(
  <tr key={i}>

    <td>{value.customerId}</td>
    <td>{value.customerName}</td>
    <td>{value.dateofreg}</td>
    <td>{value.contactPerson}</td>
    <td>{value.address}</td>
    <td>{value.email}</td>
  </tr>
  
 )
   })}
   </tbody>
  </table>
    </div>
  )

  }
 
  }
export default ShowUsers;
