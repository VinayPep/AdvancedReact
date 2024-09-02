export const LargeBookListItems = ({ book }) => {
  const { author, price, title, pages } = book;
  return (
    <>
      <h2>{author}</h2>
      <p>{price}</p>
      <h2>Title: </h2>
      <p>{title}</p>
      <p># of Pages: {pages}</p>
    </>
  );
};
