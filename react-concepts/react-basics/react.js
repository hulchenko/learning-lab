function App() {
  const time = new Date().toLocaleDateString();
  const buttonStyle = { color: 'red', fontSize: 20 };
  const alertHandler = () => {
    alert('Hello!');
  };
  return (
    <div>
      <h1 style={buttonStyle}>{time}</h1>
      <button onClick={alertHandler}>Click me</button>
      <Tweet />
    </div>
  );
}
function Tweet() {
  return (
    <div>
      <h2>Tweet</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, voluptate
        explicabo. Officiis libero quam ex.
      </p>
    </div>
  );
}

//ReactDOM.render(React.createElement(App), document.querySelector('#root'));
ReactDOM.render(<App />, document.querySelector('#root'));
