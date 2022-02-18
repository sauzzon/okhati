import { Link, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Context } from "../context/Context";

const Dashboard = () => {
  const { isLoggedIn } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate("/login");
    }
  }, []);

  return (
    <center>
      <h2>Hello User</h2>
      <Link to="/">Go to Home</Link>
    </center>
  );
};

export default Dashboard;
