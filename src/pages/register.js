import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = () => {};

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
        />{" "}
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
        />
        <br></br>
        <TextField
          margin="normal"
          required
          type="password"
          id="cpassword"
          label="Confirm Password"
          name="cpassword"
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
