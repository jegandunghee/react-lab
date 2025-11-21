/**
 * 버튼을 눌렀을 때 카운트되는 상태 생성하기
 * state : f현재 상태 값 
 * setState : 상태를 바꾸는 함수 
 * initaValue : 초기값 
 */

import { useState } from 'react';

const StateBase = () => {

  const [count, setCount] = useState(0); 

  const add = () => {
    setCount((prev) => {return prev+1});
    setCount((prev) => {return prev+1});
    setCount((prev) => {return prev+1});
  }

  return (
    <div className="state-base">
      <p>카운트 : {count}</p>
      <button onClick= {add}>클릭</button>
    </div>
  );
};

export default StateBase;
