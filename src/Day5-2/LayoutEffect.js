import {  useLayoutEffect, useState } from "react"

const LayoutEffect = () => {

  // useEffect( () => {
  //   console.log("useEffect 실행 : 화면이 그려진 후 ");
  // }, []);

  // useLayoutEffect( () => {
  //   console.log("useLayoutEffect 실행 : 화면 그려지기 전");
  // })

  const [text, setText] = useState("처음시작");

  //inline스타일로 지정하기
  const style = {
    fontSize : '3rem',
    padding : '3rem'
  }

  //useEffect로 처리완료 출력해보기 
  // useEffect( () => {
  //   setText("처리완료");
  // }, []);

  //useLayoutEffect로 처리완료 출력해보기 
  useLayoutEffect( () => {
    setText("처리완료");
  }, []);

  
  return (
    <div style={style}>
      {text}
    </div>
  )
}

export default LayoutEffect