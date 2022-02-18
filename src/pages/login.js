import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(formData);
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
