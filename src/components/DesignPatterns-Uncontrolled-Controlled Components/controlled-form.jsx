import React, { useState, useEffect } from "react";

export const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    if (name.length < 1) {
      setError("Name cannot be empty.");
    } else {
      setError("");
    }
  }, [name]);

  return (
    <form>
      {error && <p>{error}</p>}
      <input
        name="name"
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        placeholder="Age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

/*
  const [open, setOpen] = useState(false);
  return (
    <>
      <ControlledModal onClose={setOpen} shouldDispaly={open}>
        <p>This is my modal</p>
      </ControlledModal>
      <button onClick={() => setOpen(!open)}>
        {open ? "Hide Modal" : "Display Modal"}
      </button>
    </>
  );

*/
