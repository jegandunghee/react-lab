import "./card.css";
import number1Img from '../assets/img-01.png';

const Card = ({file , title}) => {

  const PUBLIC = process.env.PUBLIC_URL;

  //화면에 보여지는 영역 - jsx구문 사용
  return (
    <div className="card">
      <div className="img-wrap">
        <img src={`${PUBLIC}/img/img-kakao-${file}.png`} alt={`Day${file} 이미지`} />
        <h2>{title}</h2>
      </div>
      <img src={number1Img} alt="1번이미지" />
    </div>
    
  );
}

export default Card;