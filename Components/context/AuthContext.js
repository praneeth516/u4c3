//import axios from "axios";
import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleLogin = (email, password) => {
    //  api request to reqres.in for the token
    const p1={email:email,password:password}
  };
  fetch("https://regres.in/api/login",{
    method:"post",
    body:JSON.stringify(p1),
    headers:{"content-type":"application/json"},
})
.then((response)=>response.jSON())
.then((response)=>setToken(response.token))
.catch((error)=>console.log(error));
  const handleLogout = () => {
    //  set token back to " " once logged out
    setToken("");
  };

  const value = { handleLogin, token, handleLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
