import style from './Card.module.css';
import listStyle from './list.module.css';

const Card = () => {

  console.log(style);

  return (
    <div className={listStyle.p}>
      <h2>모듈카드</h2>
      <p>CSS Module 적용</p>
    </div>
  )
}

export default Card