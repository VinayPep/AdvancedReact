import { createContext, useContext } from "react";
//used to share logic between header footer and body
const Context = createContext(null);

const Body = ({ children }) => {
  return <div style={{ padding: ".5rem" }}>{children}</div>;
};

const Header = ({ children }) => {
  const {test} = useContext(Context)
  return (
    <div
      style={{
        borderBottom: "1px solid black",
        padding: ".5rem",
        marginBottom: ".5rem",
      }}
    >
      {children}
      {test}
    </div>
  );
};
const Footer = ({ children }) => {
  return (
    <div
      style={{
        borderTop: "1px solid black",
        padding: ".5rem",
        marginTop: ".5rem",
      }}
    >
      {children}
    </div>
  );
};

const Card = ({ test, children }) => {
  return (
    <Context.Provider value={{test}}>
      {" "}
      <div style={{ border: "1px solid black" }}>{children}</div>
    </Context.Provider>
  );
};

export default Card;

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

/**
 *  <Card test={"Value"}>
        <Card.Header>
          <h1 style={{ margin: "0" }}>Header</h1>
        </Card.Header>
        <Card.Body>
          He hid under the covers hoping that nobody would notice him there. It
          really didn't make much sense since it would be obvious to anyone who
          walked into the room there was someone hiding there, but he still held
          out hope. He heard footsteps coming down the hall and stop in front in
          front of the bedroom door. He heard the squeak of the door hinges and
          someone opened the bedroom door. He held his breath waiting for
          whoever was about to discover him, but they never did.
        </Card.Body>
        <Card.Footer>
          <button>Ok</button>
          <button>Cancel</button>
        </Card.Footer>
      </Card>
 * 
 * 
 * 
 * 
 * 
*/
