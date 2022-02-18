import { useEffect, useContext, useState } from "react";
import { Context } from "../context/Context";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Register = () => {
  const [regSuccess, setRegSuccess] = useState(false);
  const { isLoggedIn } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      return navigate("/");
    }
    if (regSuccess) {
      return navigate("/login");
    }
  }, [isLoggedIn, regSuccess]);

  const [formError, setFormError] = useState({
    passwordError: "",
    cpasswordError: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      password: data.get("password"),
      cpassword: data.get("cpassword"),
    };
    const isValid = checkValidation(formData);
    if (isValid) {
      registerUser(formData);
    }
  };

  const registerUser = async (formData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:8000/api/auth/register",
        formData,
        config
      );
      window.alert(data.msg);
      setRegSuccess(true);
    } catch (error) {
      window.alert(error.response.data.msg);
    }
  };

  const checkValidation = (formData) => {
    let errorFree = true;
    const tempError = {
      passwordError: "",
      cpasswordError: "",
    };

    if (
      formData.password.length < 8 ||
      !/\d/.test(formData.password) ||
      !/[a-zA-Z]/.test(formData.password)
    ) {
      errorFree = false;
      tempError.passwordError =
        "At least 8 character long and include at least a number and an alphabet";
    }

    if (formData.password !== formData.cpassword) {
      errorFree = false;
      tempError.cpasswordError = "Password doesn't match";
    }
    setFormError({
      ...formError,
      ...tempError,
    });
    return errorFree;
  };

  return (
    <center>
      <h2>Register with Us</h2>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          id="name"
          label="Name"
          name="name"
        />
        <br></br>
        <TextField
          margin="normal"
          required
          type="email"
          id="email"
          label="Email Address"
          name="email"
        />
        <br></br>
        <TextField
          margin="normal"
          required
          id="phone"
          label="Phone Number"
          name="phone"
        />
        <br></br>
        <TextField
          margin="normal"
          required
          type="password"
          id="password"
          label="Password"
          name="password"
          error={Boolean(formError.passwordError)}
          helperText={formError.passwordError}
        />
        <br></br>
        <TextField
          margin="normal"
          required
          type="password"
          id="cpassword"
          label="Confirm Password"
          name="cpassword"
          error={Boolean(formError.cpasswordError)}
          helperText={formError.cpasswordError}
        />
        <br></br>
        <Button type="submit" variant="outlined">
          Register
        </Button>
      </Box>
      <br></br>
      <h4>Already Registered?</h4>
      <Button
        size="small"
        component={Link}
        to="/login"
        type="submit"
        variant="outlined"
      >
        Log In
      </Button>
      <br></br>
      <br></br>
      <Link to="/">Go to Home</Link>
    </center>
  );
};

export default Register;
