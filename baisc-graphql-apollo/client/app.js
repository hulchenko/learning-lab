const basicQuery = async () => {
  const requestPayload = {
    query: "query { greeting }",
  };
  try {
    const response = await fetch("http://localhost:9000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestPayload),
    });
    const { data } = await response.json();
    return data.greeting;
  } catch (error) {
    console.log("Some error occured: ", error);
    throw error; // need to throw for .catch to work
  }
};

basicQuery()
  .then((query) => {
    document.getElementById("greeting").innerText = query;
  })
  .catch((err) => {
    document.getElementById("greeting").innerText = err;
  });
