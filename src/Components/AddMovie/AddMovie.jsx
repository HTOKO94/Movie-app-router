import React, { useState } from 'react'
import { Modal, Button, FormControl } from 'react-bootstrap'
import './AddMovie.css'

function AddMovie({getMovieListData}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[newMovie, setNewMovie] = useState({
      title:"",
      description:"",
      posterUrl:"",
      rate: 0
  })

  const handleChange = (e) => {
      setNewMovie({ ...newMovie, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    getMovieListData(newMovie)
    setNewMovie({ 
    title:"",
    description:"",
    posterUrl:"",
    rate:0
    })
    handleClose()
  }


  return (
    <>
      <Button variant="dark" onClick={handleShow}>
                  Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie here...</Modal.Title>
        </Modal.Header>
        <Modal.Body className='tapemovie'>
        <FormControl 
        type="text" 
        placeholder="Title ..." 
        className="mr-sm-2 searchInput" 
        name="title"
        onChange={handleChange}
                  />
        <FormControl 
        as ="textArea" 
        placeholder="Description ..." 
        className="mr-sm-2 searchInput" 
        name="description"
        onChange={handleChange}
                  />

        <h7 className="ratingtext">Rating ... </h7>

        <FormControl 
        type="number" 
        className="mr-sm-2 searchInput" 
        name="rate"
        as="select"
        onChange={handleChange}>
        
        <option value="1"> 1 </option>
        <option value="2"> 2 </option>
        <option value="3"> 3 </option>
        <option value="4"> 4 </option>
        <option value="5"> 5 </option>
        </FormControl>
        <FormControl 
        type="text" 

        placeholder="Movie Poster URL" 
        className="mr-sm-2 searchInput" 
        name="posterUrl"
        onChange={handleChange}
                  />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default AddMovie
