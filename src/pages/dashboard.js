import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "./login";

const Dashboard = () => {
  const [token, setToken] = useState(false);
  if (!token) {
    return <Login></Login>;
  }
  return (
    <center>
      <h2>Hello User</h2>
      <Link to="/">Go to Home</Link>
    </center>
  );
};

export default Dashboard;
