import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./blog.css";
import { addBlog } from "../services/allAPI";

function AddBlog() {
  const [blogs,setBlogs] = useState([{
    title : "",
    content:"",
    image:""
  }])
  const onHandleSubmit = async() =>{
    const {title,content,image} = blogs
    if (!title || !content || !image) {
      alert("Enter All Details")
    }
    else{
      const res = await addBlog(blogs)
      if (res.status == 201) {
        alert(" Blog added successfully")
      }
      else{
        console.log(res.error);
        
      }
      
    }

  }
  return (
    <div
      className="w-100 d-flex   align-items-center bg-light justify-content-center "
      style={{
        height: "100vh",
        backgroundImage: `url("https://plus.unsplash.com/premium_photo-1669904022334-e40da006a0a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D")`,
      }}
    >
      <div
      style={{backgroundColor:"rgba(0, 0, 0, 0.8)"}}
       className="w-50 d- flex align-items-center bg-light justify-content-center p-4">
        <TextField
          className="w-100 mt-3"
          name="title"
          id="outlined-basic"
          label="Title"
          variant="outlined"
          onChange={(e)=>setBlogs({...blogs,title : e.target.value})}
        />
        <TextField
          className="w-100 mt-3"
          name="content"
          id="outlined-basic"
          label="Write your Content"
          variant="outlined"
          onChange={(e)=>setBlogs({...blogs,content:e.target.value})}
        />
        <TextField
          className="w-100 mt-3"
          name="image"
          id="outlined-basic"
          label="Image URL"
          variant="outlined"
          onChange={(e)=>setBlogs({...blogs,image:e.target.value})}
        />
        <div className=" d-flex align-items-center justify-content-center mt-5">
          <Button
            onClick={onHandleSubmit}
            variant="outlined"
            style={{ height: "60px" }}
          >
            Add Content
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
