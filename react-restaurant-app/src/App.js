import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';
import Reviews from './components/Reviews';
import { uuid } from 'uuidv4';

function App() {
  const [reviews, setReviews] = useState([]);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    restaurant: '',
    review: '',
    id: uuid(),
  });
  return (
    <div className="app">
      <h1>Restaurant App</h1>
      <Form
        editing={editing}
        form={form}
        reviews={reviews}
        setForm={setForm}
        setReviews={setReviews}
        setEditing={setEditing}
      />
      <Reviews
        reviews={reviews}
        setForm={setForm}
        setEditing={setEditing}
        setReviews={setReviews}
      />
    </div>
  );
}

export default App;
