import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const Nav =styled.nav
`display:flex;
justify-content:space-around;
background-color:#fd9b96;
padding:10px 0px;`

const snav=styled(NavLink)
`width:200px;
&focus{
  color:blue;
}`


export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <Nav>
        {/* keep all the NavLinks here */}
        <snav to ="/">Home</snav>
        <snav to ="/about">About</snav>
        <snav to ="/books">Books</snav>
        {token ?<div onclick={handleLogout}>logout</div>:<snav to ="/login">Login</snav>}
      </Nav>
    </>
  );
};
