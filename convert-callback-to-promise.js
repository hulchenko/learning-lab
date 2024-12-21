// Convert Callback to Promise
// Create a promise function to be able to use callback function via promise approach <-- .then part on line 26

const callback = (result) => {
  console.log("Callback: ", result);
};

// Callback approach
const fnOne = (data, callback) => {
  setTimeout(() => {
    callback(data);
  }, 1000);
};

fnOne("callback test", callback);

// Convert to Promise approach
const fnTwo = (data) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, 1000);
  });
};

fnTwo("promise test").then(callback);
