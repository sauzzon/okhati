import { useEffect, useContext } from "react";
import { Context } from "../context/Context";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      return navigate("/");
    }
  }, [isLoggedIn]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:8000/api/auth/login",
        formData,
        config
      );
      localStorage.setItem("userToken", data.token);
      setIsLoggedIn(true);
    } catch (error) {
      window.alert(error.response.data.msg);
    }
  };

  return (
    <center>
      <h2>Login to your account</h2>
      <Box component="form" onSubmit={handleSubmit}>
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
          type="password"
          id="password"
          label="Password"
          name="password"
        />
        <br></br>
        <Button type="submit" variant="outlined">
          Login
        </Button>
      </Box>{" "}
      <br></br>
      <h4>Not Registered Yet?</h4>
      <Button
        size="small"
        component={Link}
        to="/register"
        type="submit"
        variant="outlined"
      >
        Register Now
      </Button>
      <br></br>
      <br></br>
      <Link to="/">Go to Home</Link>
    </center>
  );
};

export default Login;
