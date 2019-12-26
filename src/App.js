import React,{Component} from 'react';
import {Router,Route,BrowserRouter,Switch} from 'react-router-dom';



import Login from './login';
import Dashboard from './dashboard';
import Home from './Home';
import AddUsers from './AddUsers';
import ShowUsers from './ShowUsers';
import Logout from './logout';
import Chgpwd from './chgpwd';
class App extends Component {
render(){
  return (
    <BrowserRouter>
    <div>
     
      <Route exact path="/" component={Login} />
      <Route path="/Home" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/AddUsers" component={AddUsers} />
      <Route path="/ShowUsers" component={ShowUsers} />
      <Route path="/Chgpwd" component={Chgpwd} />
      <Route path="/Logout" component={Logout} />
    </div>
  </BrowserRouter>
  )

  }
  }
export default App;



// import React,{Component} from 'react';
// import {Route,BrowserRouter,Switch} from 'react-router-dom';



// import Login from './login';
// import Dashboard from './dashboard';
// import Home from './Home';
// import AddUsers from './AddUsers';
// import ShowUsers from './ShowUsers';
// class App extends Component {
// render(){
//   return (
//     <div className="App">

// <BrowserRouter>

// <Route exact path='/' component={Login}/>
// <Route path='/dashboard' component={Dashboard}/>
// <Route path="/AddUsers" component={AddUsers}/>
// {/*<div>
//  <Switch>
//   <Route path="/dashboard/home" component={Home}/>
 
//   <Route path="/dashboard/ShowUsers" component={ShowUsers}/>
//   </Switch> 
// </div>*/}

// </BrowserRouter>
//     </div>
//   )

//   }
//   }
// export default App;
