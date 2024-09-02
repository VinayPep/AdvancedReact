import React, { useState } from "react";

export const UncontrolledFlow = ({ children, onDone }) => {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goNext = (dataFromStep) => {
    const nextStepIndex = currentStepIndex + 1;
    const newData = {
      ...data,
      ...dataFromStep,
    };
    if (nextStepIndex < children.length) {
      setCurrentStepIndex(nextStepIndex);
    } else {
      onDone(newData);
    }
    setData(newData);
  };

  const currentChild = React.Children.toArray(children)[currentStepIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }
  return currentChild;
};

/**
 * const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Im step no. : Enter your Name</h1>
      <button onClick={() => goNext({ name: "MyName" })}>Next</button>
    </>
  )
};
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Im step no.: Enter your Age</h1>
      <button onClick={() => goNext({ age: 20 })}>Next</button>
    </>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Im step no. : Enter your Country</h1>
      <button onClick={() => goNext({ country: "USA" })}>Next</button>
    </>
  );
};

const onDone = (data) => {
  console.log(data);
  alert("Yayyy you made it to the final step");
};

<UncontrolledFlow onDone={onDone}>
<StepOne />
<StepTwo />
<StepThree />
</UncontrolledFlow>

 * 
 * 
 * */
