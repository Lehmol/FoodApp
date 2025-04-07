import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../src/index.css";

const PickedFood = () => {
        const { id } = useParams();
        const [food, setFood] = useState(null);

        useEffect(() => {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then((res) => res.json())
                .then((data) => {
                    if(data.meals) {
                        setFood(data.meals[0]);
                    }
                })
                .catch((err) => console.error("Error fetching food details:", err));
        }, [id]);

        if(!food) return <p className="text-center">Search for a food</p>;

        const ingredients = [];
        for (let i =1; i <= 20; i++) {
            const ingredient = food[`strIngredient${i}`];
            const measure = food[`strMeasure${i}`];
            if (ingredient) {
                ingredients.push(`${measure} ${ingredient}`)
            }
        }
    

    return ( 
        <Container>
            <Row>
                <Col>
                    <Image className="food-image" src={food.strMealThumb}></Image>
                </Col>
                <Col className="first-column">
                    <h2 className="mt-4">{food.strMeal}</h2>
                    <hr></hr>
                    <h4 style={{ fontWeight: "bold" }}>Ingredients:</h4>
                    <ul>
                        {ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col className="second-column">
                    <h4 className="mt-3">Instructions:</h4>
                    <hr></hr>
                    <p>{food.strInstructions}</p>
                </Col>
            </Row>
        </Container>
    );

} 

export default PickedFood;