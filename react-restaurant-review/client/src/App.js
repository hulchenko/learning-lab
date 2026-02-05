import React, { useState, useEffect } from 'react';
import './App.css';
import StarRating from './Rating';
import Axios from 'axios'; //to make API requests

function App() {
  //create a State
  const [restaurantName, setRestaurantName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(null);
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:4000/api/get').then((response) => {
      setRestaurantList(response.data);
    });
  }, []);

  //create POST API request through Axios
  const submitReview = () => {
    Axios.post('http://localhost:4000/api/insert', {
      restaurantName: restaurantName,
      restaurantReview: review,
      restaurantRating: rating,
    });

    setRestaurantList([
      ...restaurantList,
      {
        restaurantName: restaurantName,
        restaurantReview: review,
        restaurantRating: rating,
      },
    ]);
  };

  return (
    <div className="App">
      <h1>Restaurant Reviews</h1>
      <div className="form">
        <label>Restaurant Name:</label>
        <input
          type="text"
          name="restaurantName"
          onChange={(event) => {
            setRestaurantName(event.target.value);
          }}
        />
        <label>Restaurant Review:</label>
        <input
          type="text"
          name="review"
          onChange={(event) => {
            setReview(event.target.value);
          }}
        />
        <label>Restaurant Rating:</label>
        <StarRating />
        <button onClick={submitReview}>Submit</button>
        {restaurantList.map((value) => {
          return (
            <div className="reviewCard">
              <h1>{value.restaurantName}</h1>
              <h3>{value.restaurantReview}</h3>
              <h3>{value.restaurantRating}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
