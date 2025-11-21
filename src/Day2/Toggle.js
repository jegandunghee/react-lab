import { useState } from "react"


const Toggle = () => {

  const [show , setShow] = useState(true);


  return (
    <div className="toggle">
      <button 
        onClick={() => { setShow(!show)}}>{show?"내용 숨기기기기기긱" : "내용 boygui"}
      </button>
      {show && <p>오늘도 무사히..!</p>}
    </div>
  )
}

export default Toggle