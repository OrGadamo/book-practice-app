import { useState } from "react";
export default function CountDown({ start }) {
  let [counter, setCount] = useState(+start);
  function counterDown() {
    if (counter > 0) setCount(counter - 1);
  }
  return (
    <div>
      <h1>my counter on:{counter}</h1>
      <button onClick={counterDown}>Click to count down</button>
    </div>
  );
}
