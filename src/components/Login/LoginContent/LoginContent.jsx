import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';

const LoginContent = () => {
    return (
        <div>
           <Container className=" w-25 mx-auto mt-4">
        <h3>Please Login</h3>
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" required placeholder="Enter email" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br />
        <Form.Text className="text-secondary">
        Do not  Have An Account ? <Link to='/register'> Register</Link>
        </Form.Text>
        <Form.Text className="text-warning">
            
        </Form.Text>
      </Form>
    </Container> 
        </div>
    );
};

export default LoginContent;