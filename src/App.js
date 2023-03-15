import { observer } from "mobx-react";
import "./App.css";

const App = observer((props) => {
  const { myCounter } = props;

  console.log(myCounter);

  return (
    <div className="App">
      카운트: {myCounter.count}
      <br />
      <br />
      마이너스?: {myCounter.isNegative}
      <br />
      <br />
      <button onClick={() => myCounter.increase()}>+</button>
      <button onClick={() => myCounter.decrease()}>-</button>
    </div>
  );
});

export default App;
