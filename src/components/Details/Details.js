import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState, useContext } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { FoodContext } from '../Resturent/Resturent';

const Details = () => {
    const { idName } = useParams();
    // console.log(idName);
    const [foodDetail, setFoodDetail] = useState({});
    const [offer, setOffer] = useState(false);
    // console.log(offer);
    const food = useContext(FoodContext);
    const { strMeal, strMealThumb, strInstructions } = foodDetail;
    console.log(foodDetail);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFoodDetail(data.meals[0]))
    }, []);
    const history = useHistory();
    const handleHomepage = () => {
        history.push('/home');
    }

    return (
        <div>
            <Button onClick={() => setOffer(!offer)} className="btn-primary">Check your Offer</Button>
            <div>
                {offer && <h1>Offer 20% </h1>}
            </div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions}
                    </Card.Text>
                    <Button className="btn-primary" onClick={handleHomepage} variant="primary">See All Items</Button>
                    <Card.Text>Food: {food}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Details;