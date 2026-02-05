import React, { useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import StarRating from './Rating';

const ReviewItem = ({ handleDelete, handleEdit, review, ratingValue }) => {
  const [rating, setRating] = useState(null);
  return (
    <div className="reviewItem">
      <h3>{review.restaurant}</h3>
      <p>{review.review}</p>
      <StarRating rating={ratingValue} />
      <div>
        <button onClick={() => handleDelete(review.id)}>
          <FaTrash />
        </button>
      </div>
      <div>
        <button onClick={() => handleEdit(review.id)}>
          <FaEdit />
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default ReviewItem;
