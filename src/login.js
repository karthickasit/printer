import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import "./login.css";
import { Button, Jumbotron,Form, FormGroup, Label, Input, FormText,Container, Row, Col } from 'reactstrap';
class Login extends Component {
    state={
uname:'',
pwd:'',
        loggedIn:false
    }
    handle=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
    })
    }
   sub=()=>{
   

       if(this.state.uname==="admin"||this.state.pwd===123)
       {
this.setState({
           loggedIn:true
       })
       const userfm=this.state;  
       console.log(userfm) ;  
       }  
   }
    render(){

        if(this.state.loggedIn===true)
        {
            return <Redirect to={'/dashboard'}/>
        }
  return (
    <div className="bg-img">
  
     <Container>
         <Row>
             <Col xs="6" className="white mt-5 py-5" >
             <section>
                 <div style={{textAlign:'center'}}>
                     
            <h4> Account Login</h4>
            <br/>
<h5>Sign In to your account</h5></div>
     <Form onSubmit={this.sub}>
        <FormGroup>
          <Label for="username">User Name</Label>
          <Input  name="uname" id="username" placeholder="Enter User Name"
           value={this.state.uname} onChange={this.handle}/>
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input  name="pwd" id="password" placeholder="Enter Password"
           value={this.state.pwd} onChange={this.handle}/>
           <br/>
           <Button color="primary" size="lg" block>Sign In</Button>
        </FormGroup>
      
      
        </Form>
        </section>
        </Col>
      
        </Row>
       
        </Container>
      {/* <form action="" onSubmit={this.sub}>
<label htmlFor="">enter username</label>
<input type="text" name="uname" value={this.state.uname} onChange={this.handle}/>
<br/>
<label htmlFor="">enter password</label>
<input type="text" name="pwd" value={this.state.pwd} onChange={this.handle}/>
<br/>
<button>Login</button>
     </form>  */}
    
    </div>
  );
}
}
export default Login;
