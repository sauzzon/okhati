import { useEffect, useContext, useState } from "react";
import { Context } from "../context/Context";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Paper, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonAppBar from "./appbar";
import Notification from "./notification";
import { Link } from "react-router-dom";

import axios from "axios";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ type: "", msg: "" });
  const [regSuccess, setRegSuccess] = useState(false);
  const { isLoggedIn } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      return navigate("/");
    }
  }, [isLoggedIn]);

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
      setLoading(true);
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
      setLoading(false);
      setNotification({ type: "success", msg: data.msg });
      setRegSuccess(true);
    } catch (error) {
      setLoading(false);
      setNotification({ type: "error", msg: error.response.data.msg });
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
    <>
      <ButtonAppBar></ButtonAppBar>
      {notification.type && (
        <Notification
          severity={notification.type}
          message={notification.msg}
        ></Notification>
      )}
      {loading ? (
        <CircularProgress
          sx={{ margin: "auto", position: "absolute", top: "48%", left: "48%" }}
        />
      ) : regSuccess ? (
        <Paper
          elevation={10}
          style={{
            padding: 30,
            height: "25vh",
            width: "30vw",
            margin: "120px auto",
          }}
        >
          <center>
            <h2>Let's Login</h2>
            <Button
              sx={{ m: 2 }}
              component={Link}
              to="/login"
              type="submit"
              variant="contained"
              color="success"
            >
              Login
            </Button>
          </center>
        </Paper>
      ) : (
        <>
          <Paper
            elevation={10}
            style={{
              padding: 20,
              height: "80vh",
              width: "35vw",
              margin: "20px auto",
            }}
          >
            <center>
              <h2>Register with Us</h2>
            </center>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                fullWidth
                required
                id="name"
                label="Name"
                name="name"
              />

              <TextField
                margin="normal"
                fullWidth
                required
                type="email"
                id="email"
                label="Email Address"
                name="email"
              />

              <TextField
                margin="normal"
                fullWidth
                required
                id="phone"
                label="Phone Number"
                name="phone"
              />

              <TextField
                margin="normal"
                fullWidth
                required
                type="password"
                id="password"
                label="Password"
                name="password"
                error={Boolean(formError.passwordError)}
                helperText={formError.passwordError}
              />

              <TextField
                margin="normal"
                fullWidth
                required
                type="password"
                id="cpassword"
                label="Confirm Password"
                name="cpassword"
                error={Boolean(formError.cpasswordError)}
                helperText={formError.cpasswordError}
              />

              <center>
                <Button
                  sx={{ m: 1 }}
                  type="submit"
                  variant="contained"
                  color="success"
                >
                  Register
                </Button>
              </center>
            </Box>
          </Paper>
        </>
      )}
    </>
  );
};

export default Register;
