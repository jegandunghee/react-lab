//Children컴포넌트에서 사용될 컴포넌트 지정
const Card = (props) => {

  const children = props.children;
  const style = {
    display: "flex",
    height: "30vh",
    padding: "1rem",
    justifyContent: "center",
    border: "1px solid #888",
  };
  return (
    <div style={style}>{children}</div>
  );
};

const Children = () => {
  return (
    <>
      <Card>
        <p>Card-1</p>
        <p>Card-2</p>
      </Card>
      <Card>
        <h1>title1</h1>
        <h2>title2</h2>
        <h3>title3</h3>
      </Card>
      <Card />
    </>
  );
};

export default Children;
