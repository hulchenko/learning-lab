import React from 'react';
import Tweet from './Tweet';
const TweetList = ({ name, tweets, setName, setTweets }) => {
  //({name, tweets}) = (props) -> instead of 'props.name', we can just use 'name'
  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet
          setTweets={setTweets}
          name={name}
          tweet={tweet}
          tweets={tweets}
          key={tweet.id}
        />
      ))}
      <button onClick={() => setName('Alissa')}>CHANGE NAME</button>
    </div>
  );
};

export default TweetList;
