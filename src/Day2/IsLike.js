import React, { useState } from 'react'

const IsLike = () => {

  //좋아요 버튼 클릭 시 OFF -> ON으로 변경

  const [isswitch, setSwitch] = useState("OFF");
  

  return (
    <div>
    <p>현재 좋아요 : {isswitch}</p>
    <button onClick={() => {setSwitch(isswitch==="OFF" ? "ON" : "OFF")}}>좋아요</button>
    </div>
  )
}

export default IsLike