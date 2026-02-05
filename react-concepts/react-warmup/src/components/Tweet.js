import React, { useEffect } from 'react';

const Tweet = ({ name, tweet, setTweets, tweets }) => {
  const deleteTweet = () => {
    setTweets(tweets.filter((state) => state.id !== tweet.id)); //to filter through and keep only those that don't match deleted one
  };

  //({name, message}) = (props) -> instead of 'props.name', we can just use 'name'
  return (
    <div className="tweet">
      <h2 className="tweet-title">Name is: {name}</h2>
      <h3>{tweet.message}</h3>
      <button>Like</button>
      <button onClick={deleteTweet}>Delete</button>
    </div>
  );
};

export default Tweet;
