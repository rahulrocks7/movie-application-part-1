import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";
import React, { useState } from "react";

const Register = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [contactNoError, setContactNoError] = useState(false);
  const [registered, setRegistered] = useState(false);

  function handleRegister() {
    firstName === "" ? setFirstNameError(true) : setFirstNameError(false);
    lastName === "" ? setLastNameError(true) : setLastNameError(false);

    email === "" ? setEmailError(true) : setEmailError(false);
    password === "" ? setPasswordError(true) : setPasswordError(false);
    contactNo === "" ? setContactNoError(true) : setContactNoError(false);

    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      password !== "" &&
      contactNo !== ""
    ) {
      const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        contactNo: contactNo,
      };
      setRegistered(true);
      props.handleUpdateUser(userData);
    }
  }
  return (
    <div style={{ textAlign: "center" }}>
      <FormControl size="small" style={{ marginTop: "15px" }}>
        <InputLabel htmlFor="firstName">First Name*</InputLabel>
        <Input
          id="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <FormHelperText error={firstNameError}>
          {firstNameError ? "Required" : ""}
        </FormHelperText>
      </FormControl>
      <br />
      <FormControl size="small" style={{ marginTop: "15px" }}>
        <InputLabel htmlFor="lastName">Last Name*</InputLabel>
        <Input id="lastName" onChange={(e) => setLastName(e.target.value)} />
        <FormHelperText error={lastNameError}>
          {lastNameError ? "Required" : ""}
        </FormHelperText>
      </FormControl>
      <br />
      <FormControl size="small" style={{ marginTop: "20px" }}>
        <InputLabel htmlFor="email">Email address*</InputLabel>
        <Input id="email" onChange={(e) => setEmail(e.target.value)} />
        <FormHelperText error={emailError}>
          {emailError ? "Required" : ""}
        </FormHelperText>
      </FormControl>
      <br />
      <FormControl size="small" style={{ marginTop: "20px" }}>
        <InputLabel htmlFor="password">Password*</InputLabel>
        <Input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormHelperText error={passwordError}>
          {passwordError ? "Required" : ""}
        </FormHelperText>
      </FormControl>
      <br />
      <FormControl size="small" style={{ marginTop: "20px" }}>
        <InputLabel htmlFor="contactNo">Contact No*</InputLabel>
        <Input id="contactNo" onChange={(e) => setContactNo(e.target.value)} />
        <FormHelperText error={contactNoError}>
          {contactNoError ? "Required" : ""}
        </FormHelperText>
      </FormControl>
      <p style={{ display: registered ? "block" : "none" }}>
        Registration Successful. Please Login!
      </p>
      <br />
      <Button
        style={{ marginTop: "20px" }}
        variant="contained"
        color="primary"
        onClick={handleRegister}
      >
        Register
      </Button>
    </div>
  );
};

export default Register;
