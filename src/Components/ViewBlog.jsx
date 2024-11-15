import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import { deleteBlog, getBlog } from "../services/allAPI";
// import { Button } from 'react-bootstrap';
import EditBlog from "./EditBlog";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Grid,
  Box,
} from "@mui/material";
function ViewBlog() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogUpdate, setBlogUpdate] = useState([])


  const getAllBlogs = async () => {
    const response = await getBlog();
    setAllBlogs(response.data);
  };
  useEffect(() => {
    getAllBlogs();
  }, [blogUpdate]);

  const handleDelete = async (id) => {
    const res = await deleteBlog(id);
    if (res.status == 200) {
      getAllBlogs();
      alert("Blog Deleted");
    } else {
      console.log(res.error);
    }
  };

  return (
    <div>
      <Box className="box-class">
       
        {/* <ImageList >
      <ImageListItem key="Subheader" cols={2}>
       
      </ImageListItem>
      
      {allBlogs.map((item) => (
        <ImageListItem key={item.id}>
                 

          <img
            srcSet=""
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            alt={item.title}
            loading="lazy"
          />
          <EditBlog />
          <ImageListItemBar
            title={item.title}
            subtitle={item.content}
            actionIcon={
             
              <Button onClick={()=>handleDelete(item.id)}>DELETE</Button>
              
            }
           
          />
           
        </ImageListItem>
      ))}
    </ImageList> */}
        {allBlogs.map((item) => (
          
          <Card className="card" cols={2}>
            <CardMedia
              component="img"
              className="media"
              image={item.image}
              title="gdfsj"
            />
            <CardContent className="content">
              <Typography variant="h6" className="title">
                {item.title}
              </Typography>
              <Typography variant="body2" className="description">
                {item.content}
              </Typography>
              <div className="d-flex">
              <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
              <EditBlog blog={item} setBlogUpdate={setBlogUpdate}/>
              </div>
              
            </CardContent>
          </Card>
          
        ))}
        
        </Box>
      
    </div>
  );
}

export default ViewBlog;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
    cols: 2,
  },
];
