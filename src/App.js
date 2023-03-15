import "./App.css";

function App(props) {
  const { myCounter } = props;
  console.log(myCounter);

  return (
    <div className="App">
      카운트:
      <br />
      <br />
      마이너스?:
      <br />
      <br />
      <button>+</button>
      <button>-</button>
    </div>
  );
}

export default App;
