const url = "https://catfact.ninja/fact";

const asyncFn = async (cb) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    cb(data);
  } catch (error) {
    console.error("Error fetching data: ", error);
    cb("Failed");
  }
};

asyncFn((message) => console.log(message));

// What problem does callback solve? Callbacks allow you to specify what should happen after an asynchronous task completes without blocking the main thread.
