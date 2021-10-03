import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meals = (props) => {
    // console.log(props);
    const { strMeal, strMealThumb, strInstructions, idMeal } = props.meal;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0, 50)}
                    </Card.Text>
                    <Link to={`/details/${idMeal}`}>
                        <button className="btn-primary">Click For Details</button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Meals;