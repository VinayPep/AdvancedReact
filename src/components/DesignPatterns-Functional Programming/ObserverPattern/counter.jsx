import { useEffect, useState } from "react";
import { emitter } from "../../../App";

export const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // handlers
    const onIncrement = () => {
      setCount((count) => count + 1);
    };
    const onDecrement = () => {
      setCount((count) => count - 1);
    };
    //listener
    emitter.on("increment", onIncrement);
    emitter.on("decrement", onDecrement);

    return () => {
      emitter.off();
    };
  }, []);
  return <div># : {count}</div>;
};
