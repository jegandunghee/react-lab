import { useState } from "react"
import Child from "./Child"

const Parent = () => {
  // let count = 1;
  // const handleClick = ()=>{
  //   count++;
  //   console.log( "변수 Count " , count );
  // }
  const [count,setCount] = useState(1);
  const handleClick = ()=>{
    setCount(count+1);
  }
  return ( 
    <div className="parent">
      <h2>현재 카운트 : {count}</h2>
      {/* <button onClick={handleClick}>부모 카운트 증가</button> */}
      {/* <Child count={count} onChange={handleClick}/> */}
      <Child count={count} onChange={setCount}/>
    </div>    
  )
}

export default Parent