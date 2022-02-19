import { Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";
import ButtonAppBar from "./appbar";

const Landing = () => {
  const { isLoggedIn } = useContext(Context);

  return (
    <>
      <ButtonAppBar></ButtonAppBar>
      {isLoggedIn ? (
        <Paper
          elevation={10}
          style={{
            padding: 30,
            height: "30vh",
            width: "45vw",
            margin: "100px auto",
          }}
        >
          <h1>Welcome to Okhati Solutions</h1>
          <h4>We are glad to connect with you</h4>
          <center>
            <Button
              sx={{ m: 2 }}
              component={Link}
              to="/dashboard"
              type="submit"
              variant="contained"
              color="success"
            >
              Go to Dashboard
            </Button>
          </center>
        </Paper>
      ) : (
        <Paper
          elevation={10}
          style={{
            padding: 50,
            height: "45vh",
            width: "45vw",
            margin: "80px auto",
          }}
        >
          <h1>Welcome to Okhati Solutions </h1>
          <br></br>
          <h4>Connected with Us ?</h4>
          <center>
            {" "}
            <Button
              component={Link}
              to="/login"
              type="submit"
              variant="contained"
              color="success"
            >
              Log In
            </Button>
          </center>
          <h4>Not Connected Yet ?</h4>
          <center>
            {" "}
            <Button
              component={Link}
              to="/register"
              type="submit"
              variant="contained"
              color="success"
            >
              Register
            </Button>
          </center>
        </Paper>
      )}
    </>
  );
};

export default Landing;
