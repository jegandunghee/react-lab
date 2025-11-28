import styled from "styled-components";

const Button = styled.button`
  background-color: #ffc524ff;
  color: #070707ff;
  font-weight: 700;
  border-radius: 0.5rem;
  border: 1.5px solid #222;
  padding: 0.5rem;
  margin: 1rem;
`;

//Button 컴포넌트를 기반으로 다른 컴포넌트 만들어보기
const BigBtn = styled(Button)`
  background-color: #e47549ff;
  font-size: 2rem;
`;

const TypeBtn = () => {
  return (
    <>
      <Button>작은버튼</Button>
      <BigBtn>큰버튼</BigBtn>
    </>
  );
};

export default TypeBtn;
