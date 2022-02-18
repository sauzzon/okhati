import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../context/Context";

const Logout = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(Context);
  const handleClick = () => {
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
  };
  return (
    <Button size="small" variant="outlined" type="submit" onClick={handleClick}>
      Logout
    </Button>
  );
};

export default Logout;
