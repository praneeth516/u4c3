//import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Input } from "./Login";

// add style for form
export const Form = styled.form`
`;
// add style for text area
export const Textarea = styled.textarea`

`;

export const EditBookData = () => {
  const [p1,setP1]=useState({
    thumbnailUrl:"",
    longDescription:"",
  });
  const handleChange=(e)=>
  {
    setP1({...p1,[e.target.name]:e.target.value});
    console.log(p1);
  };
  const {id}=useParams();
  const navigate=useNavigate();
  const handleUpdate=(e)=>{
    e.preventDefault();
    fetch(`http://localhost:8080/books/${id}`,{
      method:"PATCH",
      body:JSON.stringify(p1),
      headers:{"Content-Type":"applicaion/json"},
    });
    navigate(`/books/${id}`);
  }
    
  return (
    <>
      <Form onSubmit={handleUpdate}>
        <Input
          name="thumbnail"
          data-testid="update-form-thumbnail"
          placeholder="Enter updated thumbnail url"
          onChange={handleChange}
        />
        <Textarea
          name="longDescription"
          data-testid="update-form-description"
          placeholder="Update long Description"
        />
        <Input dat-testid="update-form-submit" type="submit" value="Update" />
      </Form>
    </>
  );
};
