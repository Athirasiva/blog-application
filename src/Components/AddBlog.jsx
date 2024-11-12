import React from "react";
import { Button, TextField } from "@mui/material";
import "./blog.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
function AddBlog() {
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
        />
        <TextField
          className="w-100 mt-3"
          name="content"
          id="outlined-basic"
          label="Write your Content"
          variant="outlined"
        />
        <TextField
          className="w-100 mt-3"
          name="image"
          id="outlined-basic"
          label="Image URL"
          variant="outlined"
        />
        <div className=" d-flex aligh-items-center justify-content-center mt-5">
          <Button
            
            variant="outlined"
            style={{ height: "60px" }}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
