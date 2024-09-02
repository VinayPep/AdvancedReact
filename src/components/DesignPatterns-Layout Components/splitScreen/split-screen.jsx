import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div`
  flex: ${(props) => props.flex};
`;

export const SplitScreen = ({ children, leftWidth = 1, rightWidth = 1 }) => {
  console.log(children, "These are children received as props");
  const [left, right] = children;
  return (
    <Container>
      <Panel flex={leftWidth}>{left}</Panel>
      <Panel flex={rightWidth}>{right}</Panel>
    </Container>
  );
};

/*

    We can pass Left and Right as props ie <SplitScreen Left={LeftSideComponent} Right={RightSideComponent}  /> to Split Screen but rather we choose to make them child of splitscreen and
    access them inside split screen component using children props


    const LeftSideComponent = ({ title }) => {
      return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
    };

    const RightSideComponent = ({ title }) => {
      return <h2 style={{ backgroundColor: "green" }}>{title}</h2>;
    };

    // <SplitScreen leftWidth={1} rightWidth={3}>
    //   <LeftSideComponent title={"Left"} />
    //   <RightSideComponent title={"Right"} />
    // </SplitScreen>

*/
