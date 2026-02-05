import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
  const [rating, setRating] = useState(null);
  return (
    <div className="rating">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          // create 5 stars
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                console.log(ratingValue);
              }}
            />
            <FaStar
              className="star"
              color={ratingValue <= rating ? 'gold' : 'lightgrey'}
              size={25}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
