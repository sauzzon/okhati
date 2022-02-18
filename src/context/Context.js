import React, { useState } from "react";
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const token = localStorage.getItem("userToken")
    ? JSON.parse(localStorage.getItem("userToken"))
    : null;
  const [userToken, setUserToken] = useState(token);
  return (
    <Context.Provider
      value={{
        userToken,
      }}
    >
      {children}
    </Context.Provider>
  );
};
