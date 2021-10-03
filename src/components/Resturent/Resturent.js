import React, { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Meals from '../Meals/Meals';
import './Resturent.css';

export const FoodContext = createContext('Good Food');

const Resturent = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    const food = 'Delicious food';

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])
    console.log(meals);

    const handleSearch = e => {
        const searchValue = e.target.value;
        setSearchText(searchValue);
    }

    return (
        <FoodContext.Provider value={food}>
            <div>
                <input onChange={handleSearch} placeholder="search" type="text" />
                <div className="card-container">
                    {
                        meals?.map(meal => <Meals
                            key={meal.idMeal}
                            meal={meal}
                        ></Meals>)
                    }
                </div>
            </div>
        </FoodContext.Provider>
    );
};

export default Resturent;