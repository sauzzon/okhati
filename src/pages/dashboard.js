import { Link, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { Context } from "../context/Context";
import axios from "axios";
import { Paper, Button, CircularProgress } from "@mui/material";
import AppButtonBar from "./appbar";
import Notification from "./notification";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ type: "", msg: "" });
  const [userDetails, setUserDetails] = useState({});
  const { isLoggedIn } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate("/login");
    } else {
      setLoading(true);
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
      const userDetails = await axios.get("/users/dashboard", config);
      setLoading(false);
      setUserDetails(userDetails.data.user);
    } catch (error) {
      setNotification({ type: "error", msg: error.response.data.msg });
    }
  };

  return (
    <>
      <AppButtonBar></AppButtonBar>
      {notification.type && (
        <Notification
          severity={notification.type}
          message={notification.msg}
        ></Notification>
      )}
      {loading ? (
        <CircularProgress
          sx={{ margin: "auto", position: "absolute", top: "48%", left: "48%" }}
        />
      ) : (
        <Paper
          elevation={10}
          style={{
            padding: 30,
            height: "35vh",
            width: "35vw",
            margin: "80px auto",
          }}
        >
          <h3>Welcome, {userDetails.name}</h3>
          <h4>Your Email: {userDetails.email}</h4>
          <h4>Your Phone Number: {userDetails.phone}</h4>
          <Button sx={{ m: 2 }} variant="contained" color="success">
            View Calender
          </Button>
          <Button sx={{ m: 2 }} variant="contained" color="success">
            Search Doctors
          </Button>
        </Paper>
      )}
    </>
  );
};

export default Dashboard;
