import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [token, setToken] = useState(false);
  return (
    <center>
      <h1>Okhati Solutions</h1>
      {token ? (
        <Button
          component={Link}
          to="/dashboard"
          type="submit"
          variant="outlined"
        >
          Go to Dashboard
        </Button>
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
