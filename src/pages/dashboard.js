import { Link, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { Context } from "../context/Context";
import axios from "axios";

import Logout from "./logout";

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState({});
  const { isLoggedIn } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate("/login");
    } else {
      getUserDetails();
    }
  }, [isLoggedIn]);

  const getUserDetails = async () => {
    try {
      const token = localStorage.getItem("userToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      };
      const userDetails = await axios.get(
        "http://localhost:8000/api/users/dashboard",
        config
      );
      setUserDetails(userDetails.data.user);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  return (
    <center>
      <h2>Hello {userDetails.name}</h2>
      <h4>Email: {userDetails.email}</h4>
      <h4>Phone Number: {userDetails.phone}</h4>
      <Link to="/">Go to Home</Link>
      <br></br>
      <br></br>
      <Logout></Logout>
    </center>
  );
};

export default Dashboard;
