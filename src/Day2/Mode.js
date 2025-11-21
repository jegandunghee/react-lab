import { useState } from "react";

const Mode = () => {

  const [color, setColor] = useState('blue');
  const style = {
    width : '300px', 
    heigth : '200px',
    padding : '1rem',
    backgroundColor : color
  }

  const handleClick = () => {
    setColor(color === 'blue' ? 'tomato' : 'blue');
  }

  return (
    <div className="mode" style={style}>
      <p>현재 박스 색상 : {color}</p>
      <button onClick={handleClick}>색상 변경</button>
    </div>
  );
};
export default Mode;
