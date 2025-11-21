// css import 하기 
import "./prop.css";  

const Prop = ({user ,text, idx}) => {

  // console.log(prop.user);
  // console.log(user);


  //새로운 객체 생성 
  // const user = {
  //   job : '도둑',
  //   age : 20
  // }

  // const job = user.job;
  // const age = user.age;

  //user객체에 있는 job, age의 값을 새로운 객체인 job과 age에 저장하기 
  // //구조분해 방식 -> react에서 자주 사용되므로 꼭 기억해두기 
  // const {job, age} = user;
  // console.log(job, age);


  return (
    <div className="card">
      <img src={`/img/img-0${idx}.png`} alt={`카드이미지0${idx }`}/>
      <h2> {user} </h2>
      <p> {text} </p>
    </div>
  );
}

export default Prop;