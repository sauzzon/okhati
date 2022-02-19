import { useEffect, useContext, useState } from "react";
import { Context } from "../context/Context";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Paper, CircularProgress } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ButtonAppBar from "./appbar";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      return navigate("/");
    }
  }, [isLoggedIn]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
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
      setLoading(false);
      setIsLoggedIn(true);
    } catch (error) {
      setLoading(false);
      window.alert(error.response.data.msg);
    }
  };

  return (
    <>
      <ButtonAppBar></ButtonAppBar>
      {loading ? (
        <CircularProgress
          sx={{ margin: "auto", position: "absolute", top: "48%", left: "48%" }}
        />
      ) : (
        <>
          <Paper
            elevation={10}
            style={{
              padding: 30,
              height: "45vh",
              width: "30vw",
              margin: "100px auto",
            }}
          >
            <center>
              <h2>Login to your account</h2>
            </center>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                fullWidth
                required
                type="email"
                id="email"
                label="Email Address"
                name="email"
              />
              <br></br>
              <TextField
                margin="normal"
                fullWidth
                required
                type="password"
                id="password"
                label="Password"
                name="password"
              />
              <br></br>
              <center>
                <Button
                  sx={{ m: 1 }}
                  type="submit"
                  variant="contained"
                  color="success"
                >
                  Login
                </Button>
              </center>
            </Box>
          </Paper>
        </>
      )}
    </>
  );
};

export default Login;
