import React,{Component} from 'react';
import {Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';
import { BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import Home from './Home';
import AddUsers from './AddUsers';
import ShowUsers from './ShowUsers';
class Dashboard extends Component {
render(){
  return (
    <div>
      <h3 style={{textAlign:'center'}}>Welcome to GK Printers</h3>
        <Navbar  expand="md">
 
          <Nav  navbar>
          <NavbarToggler onClick={this.toggle} />
          <NavItem>
                  <Link to="/Home">Home</Link>  |
                </NavItem>
          <NavItem>
                  <Link to="/AddUsers"> Add Users</Link>  |
                </NavItem>
                <NavItem>
                  <Link to="/ShowUsers"> Show Users</Link>  |
                </NavItem>
                <NavItem>
                  <Link to="/Chgpwd"> Change Password</Link>  |
                </NavItem>
                <NavItem>
                  <Link to="/Logout"> Logout</Link>  |
                </NavItem>
                </Nav>
       
         
        </Navbar>
      </div>
    
  )

  }
  }
export default Dashboard;
