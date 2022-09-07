import { useState } from "react";

useState;
export default function Cart() {
  const [count, setCount] = useState(0);

  function changeCount() {
    setCount(count + 1);
    if (count === 5) {
      throw new Error("I crashed");
    }
  }
  return (
    <>
      <h1>My Cart</h1>
      <h2>No. of items: {count}</h2>
      <button onClick={() => changeCount()}>Add Item</button>
    </>
  );
}
