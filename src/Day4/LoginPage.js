import "./LoginPage.css";
import InputData from "./InputData"
import LoginPopup from "./LoginPopup";
import { useState } from "react";

const LoginPage = () => {

  const [isShow, setIsShow] = useState(false);

  const [strID, setStrID] = useState('');
  const [strPwd, setStrPwd] = useState('');
  const [strEmail, setStrEmail] = useState('');

  const [isError, setIsError] = useState(false);

  //로그인 버튼 누를 때 실행될 함수
  const handleSubmit = (e)=>{
    //원래 가진 기능이 사용되지 않도록 방지
    e.preventDefault();  

    //이메일 주소 검사 후, 올바른 이메일 형식 > 팝업창o , 아닌 형식 > 팝업창x
    //indexOf()  includes()
    if(strEmail.includes("@")){
      //@있으면 올바른 이메일 주소 
      //팝업창 뜨도록 설정
      setIsShow(true);
      setIsError(false);
    }else{
      //올바르지 않은 이메일 주소 
      // setIsError의 값을 true로 바꿔 경고문구를 보여줌 
      setIsError(true);
    }
  }

  // 요소가 포커스를 잃었을 때 
  //이메일에 @가 있으면 경고문구x
  // , 없으면 경고문구o
  const handleEmailBlur = () => {
    if(strEmail.includes("@")){
      setIsError(false);
    }else{
      setIsError(true);
    }
  }

  // 팝업창 닫는 함수
  const handleClose = () => {
    //닫기 버튼을 누르면 
    //팝업창 닫힘 + id, pwd, email의 값이 공백으로 처리됨 
    //이메일 경고 문구도 없어짐
    setIsShow(false);
    setStrID('');
    setStrPwd('');
    setStrEmail('');
    setIsError(false);
  }

  return (
    <>
      <form className="login-page" onSubmit={handleSubmit} noValidate>
        <InputData 
          title="아이디 또는 전화번호" 
          type = "text"
          value = {strID}
          onChange = {(e) => {setStrID(e.target.value)}}
        />

        <InputData 
          title="비밀번호" 
          type = "password"
          value = {strPwd}
          onChange = {(e) => {setStrPwd(e.target.value)}}
          />

        <InputData
          title="이메일"
          type = "email"
          value = {strEmail}
          onChange = {(e) => {setStrEmail(e.target.value)}}
          onBlur = {handleEmailBlur}
          />


        {
          isError && <p>올바른 이메일주소를 쓰거라🤬喝(갈)!!! </p>
        }

        <div className="checkbox">
          <input type="checkbox" id="check"/>
          <label htmlFor="check">로그인 상태 유지</label>
        </div>

        <button type="submit">로그인</button>
      </form>
      {
        isShow && <LoginPopup 
          onClose = {handleClose}
          textID = {strID}
          textPwd = {strPwd}
          textEmail={strEmail}/>
      }
    </>
  )
}

export default LoginPage