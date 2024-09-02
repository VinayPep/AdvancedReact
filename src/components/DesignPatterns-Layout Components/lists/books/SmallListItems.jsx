export const SmallBookListItem = ({ book }) => {
  const { author, price } = book;
  return (
    <h2>
      {author} / {price}
    </h2>
  );
};
