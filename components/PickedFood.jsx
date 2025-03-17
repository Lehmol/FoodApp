import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

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
        <Container className="mt-4">
            <Card>
                <Card.Img variant="top" src={food.strMealThumb} alt="{food.strMeal}" style={{width: "250px"}} />
                <Card.Body>
                    <Card.Title>{food.strMeal}</Card.Title>
                    <Card.Text>
                        <strong>Instructions:</strong> {food.strInstructions}
                    </Card.Text>
                    <Card.Text>
                        <strong>Ingredients:</strong>
                        <ul>
                            {ingredients.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );

} 

export default PickedFood;