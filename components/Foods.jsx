import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Foods.css"

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
                            <Card className={!food.idCategory ? 'food-card' : ''} onClick={() => isSearching && navigate(`/food/${food.idMeal || food.idCategory}`)}>
                                <Card.Img variant="top" src={isSearching ? food.strMealThumb : food.strCategoryThumb} alt={isSearching ? food.strMeal : food.strCategory} />
                                    <Card.Body>
                                        <Card.Title className="card-title" onClick={() => isSearching && navigate(`/food/${food.idMeal || food.idCategory}`)}>{isSearching ? food.strMeal : food.strCategory}</Card.Title>
                                        <Card.Text className="card-text">{isSearching ? (food.strInstructions || "No instructions").slice(0, 50) + "..." : (food.strCategoryDescription || "No description").slice(0, 50) + "..."}</Card.Text>
                                    </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Container className="text-center mt-5">
                        <lord-icon 
                            src="https://cdn.lordicon.com/lltgvngb.json"
                            trigger="loop"
                            delay="500"
                            style={{ width: "250px", height:"250px"}} />
                        <p>Sorry, we don't have that kind of food...</p>
                    </Container>
                )}
            </Row>
        </Container>
    );
};

export default Foods;