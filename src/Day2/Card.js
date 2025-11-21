import "./card.css";

const Card = ({file , title}) => {

  //화면에 보여지는 영역 - jsx구문 사용
  return (
    <div className="card">
      <div className="img-wrap">
        <img src={`/img/img-kakao-${file}.png`} alt="Day1 이미지" />
        <h2>{title}</h2>
      </div>
      
    </div>
    
  );
}

export default Card;