import React, { useState } from "react";
import {Navbar, Nav, Container, Form} from 'react-bootstrap';
import "../src/index.css";

const NavigationBar = ({ setSearchTerm }) => {
    const [searchTerm, setLocalSearchTerm] = useState('');

    const handleChange = (e) => {
        setLocalSearchTerm(e.target.value);
        setSearchTerm(e.target.value);
    };

    return ( 
    <>
        <Navbar style={{ backgroundColor: "#ffbf5d" }} variant="light" expand="lg">
            <Container style={{marginLeft: "8vw", padding: 0}}>
                <Navbar.Brand href="/" className="brand d-flex align-items-center">
                FoodApp
                </Navbar.Brand>
                <Form.Control type="search" placeholder="Search for a food..." value={searchTerm} onChange={handleChange}/>
                <Nav className="ml-auto"></Nav>
            </Container>
        </Navbar>
    </> );
}

export default NavigationBar;