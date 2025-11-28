import styled from "styled-components";

const Button = styled.button`
  /* background-color: ${ (props) => props.color || "tomato" }; */
  background-color: ${ ({color}) => color || "tomato" };

  color: #fff;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: ${ ({size}) => size || "1rem"};
  font-weight: 500;
`;

const DivBox = styled.div`
  background-color: ${ ({theme})=> theme.bg};
  font-size: ${ ({theme})=> theme.size};
  color: ${ ({theme})=> theme.text};
`;

const StyleBtn = () => {

  const style = {
    bg : 'blue',
    size : '2rem',
    text : '#fff'
  }
  return (
    <div className="">
      <Button color = 'blue' size = '2rem'>파랑</Button>
      <Button color = 'green'>초록</Button>
      <Button size = '4rem'>기본</Button>
      {/* <DivBox theme = {{bg : 'blue',  size : '2rem', text : '#fff'}}>스타일 묶음</DivBox> */}
      <DivBox theme={style}>스타일 묶음</DivBox>
      <DivBox theme={{bg:'pink', size: '2.7rem', text : 'blue'}}>스타일 묶음2</DivBox>
      <DivBox theme={{bg:'tomato', size: '3.9rem', text : '#ddd'}}>스타일 묶음3</DivBox>
    </div>
  );
};

export default StyleBtn;
