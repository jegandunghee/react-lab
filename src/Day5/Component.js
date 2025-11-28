import styled from "styled-components"

// div형태의  컴포넌트 만들기 
const Box = styled.div`
  /* background-color: tomato; */
  //부모가 전달하는 props를 받아서 사용할 수 있음 
  background-color:  ${(props)=>{ 
    return props.color
  }};
`

const Component = ({color}) => {
  return (
    <Box color = {color}>스타일 컴포넌트</Box>
  )
}

export default Component