import React from "react";
import { useEffect, useState } from "react";
//import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";
import { AuthContext } from "../context/AuthContext";
import {link} from "react-router-dom";

export const Grid = styled.div 
 ` width:500px;
 margin:auto;
display:grid;
grid-template-columns:200px 200px;
gap:30px;`

;

const Books = () => {
 const {token,handleLogout}=useContext(AuthContext);
 const [data,setData]=useState([]);
 useEffect(()=>{
   fetch("http://localhost:8080/books")
   .then((res)=>res.json())
   .then((res)=>setData(res));
 },[]);
  return (
    <>
     {token ?(
       <Grid data-testid="books-container">
         {data.map((elem)=>(
           <BookCard elem={elem}/>
         ))}
       </Grid>
  ):(
    <>
     please <Link to ="/login">Login</Link>first to continue
    </>
  )}
  </>
  );
};
    
export default Books;
