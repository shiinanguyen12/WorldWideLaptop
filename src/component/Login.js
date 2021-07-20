import React from 'react'
import './Login.css'
import './Registered.css'
import {Form, Button} from 'react-bootstrap'

function Login (){
    return(
             
            <div className="login">
                 <h2>Sign In</h2>
           <div className="login-container">
            <Form>
            <Form.Group className="sm-5" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="sm-5" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <p>Are you sure?</p>
            <Form.Group className="mb-5" controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="primary" type="submit">Dang Nhap</Button>
          </Form>
          </div>
            </div>
      
        

    )
}

export default Login