import React, { useState } from 'react';
function App() {
  const [array, setArray] = useState([]);
  const min = 1;
  const max = 10000;
  let initArray = [];

  const randomNumbers = (initArray) => {
    // create new array 1-10,000
    for (let i = min; i <= max; i++) {
      initArray.push(i);
    }
    // console.log(initArray);
    let randomArray = [];
    let randomNumber;
    let initArrayLength = initArray.length;

    while (initArrayLength) {
      //decrease init array length with each iteration
      randomNumber = Math.round(Math.random() * initArrayLength--);

      //select random index values in init array and append to the new one
      // console.log(`HERE: `, initArray.splice(randomNumber, 1));
      randomArray.push(initArray.splice(randomNumber, 1)[0]);
    }
    setArray(randomArray);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>1 - 10,000</h1>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <button onClick={() => randomNumbers(initArray)}>GENERATE</button>
      </div>
      <div
        style={{
          display: 'grid',
          maxHeight: '80vh',
          overflow: 'auto',
          margin: '1rem 5rem',
          gridTemplateColumns:
            'auto auto auto auto auto auto auto auto auto auto',
        }}
      >
        {array.map((item) => {
          return (
            <li key={item + item} style={{ listStyle: 'none' }}>
              {item}
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default App;
