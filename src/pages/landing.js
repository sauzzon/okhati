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
        <h4>
          {isLoggedIn
            ? "We are glad to connect with you"
            : "Lets Get Connected"}
        </h4>
        <center>
          {!isLoggedIn ? (
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
          ) : (
            <>
              <Button
                sx={{ m: 2 }}
                component={Link}
                to="/register"
                type="submit"
                variant="contained"
                color="success"
              >
                Register
              </Button>
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
            </>
          )}
        </center>
      </Paper>
    </>
  );
};

export default Landing;
