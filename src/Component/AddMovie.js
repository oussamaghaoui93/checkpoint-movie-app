import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddMovie = ({ add }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // initialisation
    const [title, setTitle] = useState("");
    const [overview, setDescription] = useState("");
    const [vote_average, setRate] = useState("");
    const [poster_path, setPosetUrl] = useState("");
    // update
    const handleTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleDescription = (e) => {
        setDescription(e.target.value);
    };
    const handleRate = (e) => {
        setRate(parseFloat(e.target.value));
    };
    const handlePosterUrl = (e) => {
        setPosetUrl(e.target.value);
    };
    // add movies
    const handleMovie = (e) => {
        let newMovie = { title, overview, vote_average, poster_path };
        add(newMovie);
        handleClose();
        // setTitle("");
        // setDescription("");
        // setRate("");
        // setPosetUrl("");
    };
    return (
        <div className="d-flex justify-content-center">
            <Button variant='primary' size="lg" onClick={handleShow}>
                Add Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter title'
                        value={title}
                        onChange={(e) => handleTitle(e)}
                    />
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter description'
                        value={overview}
                        onChange={(e) => handleDescription(e)}
                    />
                    <Form.Label>Rate</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Enter rate'
                        value={vote_average}
                        onChange={(e) => handleRate(e)}
                    />
                    <Form.Label>Poster Url</Form.Label>
                    <Form.Control
                        type='url'
                        placeholder='Enter poster'
                        value={poster_path}
                        onChange={(e) => handlePosterUrl(e)}
                    />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={() => handleMovie()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddMovie;
