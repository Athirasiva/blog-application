import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { editBlog } from '../services/allAPI';

function EditBlog({setBlogUpdate,blog}) {
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [blogData,setBlogData] = useState({
      title:blog.title,
      content:blog.content,
      image:blog.image,
      id:blog.id
    })
 const onHandleSubmit = async() =>{
  const {title,content,image} = blogData
  if(!title || !content || !image){

  }
  else{
    const res = await editBlog(blogData.id ,blogData)
    console.log(blogData.id);
    
    setBlogUpdate(res)
    handleClose()
    
  }
 }    
  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        Edit Blog
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Content</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter Title"
          aria-label="title"
          aria-describedby="basic-addon1"
          value={blogData.title}
          onChange={(e)=>setBlogData({...blogData, title:e.target.value})}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter Content"
          aria-label="content"
          aria-describedby="basic-addon1"
          value={blogData.content}
          onChange={(e)=>setBlogData({...blogData, content:e.target.value})}

        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter Image"
          aria-label="image"
          aria-describedby="basic-addon1"
          value={blogData.image}
          onChange={(e)=>setBlogData({...blogData, image:e.target.value})}

        />
      </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onHandleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditBlog