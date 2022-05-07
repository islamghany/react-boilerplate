import React from "react";
import { hot } from "react-hot-loader";
const App = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <p>{counter} + point</p>
      <button onClick={() => setCounter((i) => i + 1)}>increse</button>
      <button onClick={() => setCounter((i) => i - 1)}>decrese</button>
    </div>
  );
};

export default hot(module)(App);
