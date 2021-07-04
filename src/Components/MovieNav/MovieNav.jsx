import React from 'react'
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import "./MovieNav.css"


function MovieNav({getTitleSearch, getSearchRate}) {
    const ratingChanged = (newRating) => {
        getSearchRate(newRating);
    };
    const handleTitleChange = (e) => {
        getTitleSearch(e.target.value)
    }
    return (

        <Navbar bg="dark" variant="dark" className="MovieNav">
            <Navbar.Brand href="/"> <img src="lembi.png" alt="logoo"className="logo" /></Navbar.Brand>
            <Nav className="mr-auto">
                    <Nav.Link href="/">
                    
                        <h5>Home</h5>
                    </Nav.Link>
                    <Nav.Link href="/trailers">
                       
                        <h5>Movies</h5>{" "}
                    </Nav.Link>
                </Nav>
            <Form inline className="searchArea">
                <FormControl type="text" 
                 placeholder="Search" 
                 className="mr-sm-2 searchInput" 
                 onChange={handleTitleChange} />
                <ReactStars
                    count={5}
                    color={"white"}
                    char={"⚝"}
                    onChange={ratingChanged}
                    size={34}
                    activeColor="#ffd700"
                />
            </Form>
        </Navbar>

    )


}

export default MovieNav