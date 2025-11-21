import "./ifkakao.css";

const Ifkakao = ({ idx, title, sub, txt }) => {
  return (
      <div className="card">
        <img src={`/img/img-kakao-${idx}.png`} alt={`이미지${idx}`} />
        <h3>{title}</h3>
        <p>{sub}</p>
        <div className="over">
          <p>{txt}</p>
        </div>
      </div>

  );
};

export default Ifkakao;
