import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Logout from "./logout";

import { useContext } from "react";
import { Context } from "../context/Context";

const ButtonAppBar = () => {
  const { isLoggedIn } = useContext(Context);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Okhati Solutions
          </Typography>
          <Button
            component={Link}
            to="/"
            sx={{ m: 1 }}
            variant="outlined"
            color="inherit"
          >
            Home
          </Button>
          {!isLoggedIn ? (
            <>
              <Button
                component={Link}
                to="/register"
                sx={{ m: 1 }}
                variant="outlined"
                color="inherit"
              >
                Register
              </Button>
              <Button
                component={Link}
                to="/login"
                sx={{ m: 1 }}
                variant="outlined"
                color="inherit"
              >
                Login
              </Button>
            </>
          ) : (
            <>
              <Button
                component={Link}
                to="/dashboard"
                sx={{ m: 1 }}
                variant="outlined"
                color="inherit"
              >
                Dashboard
              </Button>
              <Logout></Logout>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
