//import React and state functionality
import React, { useState, useEffect } from 'react';
//Importing components
import CreateTweet from './components/CreateTweet';
import TweetList from './components/TweetList';
import './styles/App.css';

function App() {
  const [name, setName] = useState('Vadym');
  //States
  const [textInput, setTextInput] = useState('');
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    console.log('Hello from useEffect()', [tweets]);
  });

  return (
    <div>
      <h1 className="title">TWITTER LIGHT</h1>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList
        setName={setName}
        name={name}
        tweets={tweets}
        setTweets={setTweets}
      />
    </div>
  );
}

export default App;
