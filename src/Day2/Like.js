import { useState } from "react";

const Like = () => {
  const [count, setCount] = useState(0);

  // const countingStar = () => {
  //   setCount((prev) => {
  //     return prev + 1;
  //   });
  // };

  return (
    <>
      <button 
        onClick={() => {setCount(count+1);}}>좋아요</button>


      {/* <button onClick={countingStar}>👍좋아요</button> */}
      <span>{count}</span>
    </>
  );
};

export default Like;
