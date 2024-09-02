export const RegularList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};

/*
 * <RegularList
        items={authors}   //Data
        sourceName={"author"}  //Props
        ItemComponent={SmallAuthorListItem}  //Component
      ></RegularList>
      <NumberedList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      ></NumberedList>

      <RegularList
        items={books}
        sourceName={"book"}
        ItemComponent={SmallBookListItem}
      ></RegularList>
      <NumberedList
        items={books}
        sourceName={"book"}
        ItemComponent={LargeBookListItems}
      ></NumberedList>

*/
