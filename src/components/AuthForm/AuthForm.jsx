import React from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./AuthForm.module.css";
const AuthForm = () => {
  return (
    <div className={classes.authMain}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* <Form.Check type="checkbox" label="Remember me" /> */}
        </Form.Group>
        <Button
          style={{
            color: "wheat",
            borderColor: "wheat",
            margin: "4px",
            backgroundColor: "#4d7186",
          }}
          bg="dark"
          variant="dark"
        >
          Sign in
        </Button>
        <Button
          style={{
            color: "wheat",
            borderColor: "wheat",
            margin: "4px",
            backgroundColor: "#4d7186",
          }}
          bg="dark"
          variant="dark"
        >
          Sign up
        </Button>
      </Form>
    </div>
  );
};

export default AuthForm;
