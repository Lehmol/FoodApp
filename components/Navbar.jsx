import React, { useState } from "react";
import {Navbar, Nav, Container, Form} from 'react-bootstrap';

const NavigationBar = ({ setSearchTerm }) => {
    const [searchTerm, setLocalSearchTerm] = useState('');

    const handleChange = (e) => {
        setLocalSearchTerm(e.target.value);
        setSearchTerm(e.target.value);
    };

    return ( 
    <>
        <Navbar style={{ backgroundColor: "#FF5733" }} variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">FoodApp</Navbar.Brand>
                <Form.Control type="search" placeholder="Search for a food..." value={searchTerm} onChange={handleChange}/>
                <Nav className="ml-auto">
                </Nav>
            </Container>
        </Navbar>
    </> );
}

export default NavigationBar;