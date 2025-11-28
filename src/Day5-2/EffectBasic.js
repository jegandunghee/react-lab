import { useEffect, useState } from "react"


const EffectBasic = () => {

  const [count, setCount] = useState(0);

  //언제 실행할지 조건 : 의존성 배열
  //빈배열 : 처음 시작 후 한번만 실행
  // [count] -> count의 값이 바뀔 때 마다 useEffect의 동작이 실행됨
  useEffect(() => {
    alert("랜더링 후 항상 실행");
    //clean : 조건부 동작 없애기 \
      if(count >= 5){
        return () => {
          alert("Effect 종료")
        }
      }
  },[count]);

  return (
    <div>
      <p>count:{count}</p>
      <button onClick={() => {setCount(count+1)}}>+1</button>
    </div>
  )
}

export default EffectBasic