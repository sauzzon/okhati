import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";
import Logout from "./logout";

const Landing = () => {
  const { isLoggedIn } = useContext(Context);

  return (
    <center>
      {isLoggedIn && <h1>Welcome to </h1>}
      <h1>Okhati Solutions</h1>
      {isLoggedIn ? (
        <>
          <Button
            component={Link}
            to="/dashboard"
            type="submit"
            variant="outlined"
          >
            Go to Dashboard
          </Button>
          <br></br>
          <br></br>
          <Logout></Logout>
        </>
      ) : (
        <>
          <h4>Connected with Us ?</h4>
          <Button component={Link} to="/login" type="submit" variant="outlined">
            Log In
          </Button>
          <h4>Not Connected Yet ?</h4>
          <Button
            component={Link}
            to="/register"
            type="submit"
            variant="outlined"
          >
            Register
          </Button>
        </>
      )}
    </center>
  );
};

export default Landing;
