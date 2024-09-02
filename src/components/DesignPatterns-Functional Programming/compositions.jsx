export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "8px" : "16px",
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};

export const RedButton = (props) => {
  return <Button {...props} color={"crimson"}></Button>;
};

export const GreenSmall = (props) => {
  return <Button {...props} color={"green"} size={"small"}></Button>;
};

/**
 *   <RedButton text={"Im red"}></RedButton>
  <GreenSmall text={"Im green"}/>
 * */
