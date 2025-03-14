import React, { useState } from "react";
import {Navbar, Nav, Container, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return ( 
    <>
        <Navbar style={{ backgroundColor: "#FF5733" }} variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">FoodApp</Navbar.Brand>
                <Form.Control type="search" placeholder="Search for a food..." value={searchTerm} onChange={handleChange}/>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Hem</Nav.Link>
                    <Nav.Link as={Link} to="/services">Maträtter</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </> );
}

export default NavigationBar;