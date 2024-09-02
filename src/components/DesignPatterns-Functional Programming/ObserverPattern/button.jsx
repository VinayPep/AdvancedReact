import { emitter } from "../../../App";

export const Button = () => {
  const onIncrementCounter = () => {
    emitter.emit("increment");
  };

  const onDecrementCounter = () => {
    emitter.emit("decrement");
  };

  return (
    <div>
      <button onClick={onIncrementCounter}> Increase</button>
      <button onClick={onDecrementCounter}> Decrease</button>
    </div>
  );
};
