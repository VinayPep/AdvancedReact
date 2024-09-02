import React from "react";

export const UncontrolledForm = () => {
  const nameInputRef = React.createRef();
  const ageInputRef = React.createRef();

  const submitHandler = (e) => {
    console.log(nameInputRef.current.value);
    console.log(ageInputRef.current.value);
    e.preventDefault()

  };
  return (
    <form onSubmit={submitHandler}>
      <input name="name" placeholder="Name" type="text" ref={nameInputRef}/>
      <input name="age" placeholder="Age" type="number" ref={ageInputRef} />
      <input name="name" placeholder="Name" type="submit" value={"Submit"} />
    </form>
  );
};
