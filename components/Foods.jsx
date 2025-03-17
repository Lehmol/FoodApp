import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Foods = ({ searchTerm }) => {
    const [foods, setFoods] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const navigate = useNavigate();

    
    useEffect(() => {
        if (searchTerm.trim() === "") {
            setIsSearching(false);
            fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((res) => res.json())
            .then((data) => {
                setFoods(data.categories || []);
            })
            .catch((err) => console.error("Error fetching data:", err));
        } else {
            setIsSearching(true);
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
                .then((res) => res.json())
                .then((data) => {
                    setFoods(data.meals || []);
                })
                .catch((err) => console.error("Error fetching data:", err));
        }
    }, [searchTerm]);
    
    return (
        <Container className="mt-4">
            <Row>
                {foods.length > 0 ? (
                    foods.map((food) => (
                        <Col key={food.idCategory || food.idMeal} md={3} sm={6} className="mb-4">
                            <Card onClick={() => isSearching && navigate(`/food/${food.idMeal || food.idCategory}`)}>
                                <Card.Img variant="top" src={isSearching ? food.strMealThumb : food.strCategoryThumb} alt={isSearching ? food.strMeal : food.strCategory} />
                                    <Card.Body>
                                        <Card.Title style={{ cursor: 'pointer' }} onClick={() => isSearching && navigate(`/food/${food.idMeal || food.idCategory}`)}>{isSearching ? food.strMeal : food.strCategory}</Card.Title>
                                        <Card.Text>{isSearching ? (food.strInstructions || "No instructions to see").slice(0, 50) + "..." : (food.strCategoryDescription || "No description to see").slice(0, 50) + "..."}</Card.Text>
                                    </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p>No foods found</p>
                )}
            </Row>
        </Container>
    );
};

export default Foods;