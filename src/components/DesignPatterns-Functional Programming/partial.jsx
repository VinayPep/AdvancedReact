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

export const partialComponent = (Component, partialProps) => {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
};

export const RedButton = partialComponent(Button, {
  color: "crimson",
  text: "Im red",
});
export const SmallRedButton = partialComponent(RedButton, { size: "small" });
