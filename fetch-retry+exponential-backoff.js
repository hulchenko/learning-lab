// Design an utility which takes URL and a value for attempts which will attempt to make a fetch request. If on failure it tries again with increasing delay (exponential backoff) for number of times which user has requested.

const requestManager = (url, attempts, delay) => {
  console.log("Attempts left: ", attempts);
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((data) => resolve(data.json()))
      .catch((error) => {
        const isLastAttempt = attempts === 0;
        if (isLastAttempt) {
          return reject(error);
        }
        setTimeout(() => {
          requestManager(url, attempts - 1, delay + 1000)
            .then((data) => resolve(data.json()))
            .catch(reject);
        }, delay);
      });
  });
};

const url = "https://jsonplaceholder.typicode.com1/posts/1";

requestManager(url, 3, 1000)
  .then((response) => console.log("Response:", response))
  .catch((err) => console.log("Error: ", err));
