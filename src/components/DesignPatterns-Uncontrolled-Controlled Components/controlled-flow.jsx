import React from "react";

export const ControlledFlow = ({ children, currentStepIndex, onNext }) => {
  const goNext = (dataFromStep) => {
    onNext(dataFromStep);
  };
  const currentChild = React.Children.toArray(children)[currentStepIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }
  return currentChild;
};

/*
const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Im step no. : Enter your Name</h1>
      <button onClick={() => goNext({ name: "MyName" })}>Next</button>
    </>
  );
};
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Im step no.: Enter your Age</h1>
      <button onClick={() => goNext({ age: 26 })}>Next</button>
    </>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Congrats you qualified for the gift</h1>

      <button onClick={() => goNext({})}>Next</button>
    </>
  );
};

const StepFour = ({ goNext }) => {
  return (
    <>
      <h1>Im step no. : Enter your Country</h1>
      <button onClick={() => goNext({ country: "USA" })}>Next</button>
    </>
  );
};

function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [data, setData] = useState({});

  const onNext = (dataFromStep) => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIndex(currentStepIndex + 1);
  };
  return (
    <>
      <ControlledFlow onNext={onNext} currentStepIndex={currentStepIndex}>
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFour />
      </ControlledFlow>
    </>
  );
}



*/
