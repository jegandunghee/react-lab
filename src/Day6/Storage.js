import { useState } from "react";


const Storage = () => {

  //(3)
  //불러온 데이터를 화면에 보여주기 위한 State 처리 
  const [data, setData] = useState(null);

  //불러오기 버튼 처리 함수 
  const handleLoad = () => {
    //키를 기준으로 불러오기 
    //(2)
    const item = localStorage.getItem("userName");
    //(7-3) .parse를 사용해서 문자열로 저장된 값을 객체로 바꿔줌 
    setData(JSON.parse(item));
  }

  //저장하기 버튼 처리 함수
  const handleSave = () => {
    //(1)
    //localStorage에 저장하기 :  .set // 각각의 요소 : Item // 각 아이템의 키와 값 설정: ("키", "값") 
    //(5) : 전체삭제 함수 처리를 위해 데이터 여러개 넣기 
    //(7) : 아이템을 배열로 지정했을 경우 
    // localStorage.setItem("userName","gil-dong");
    // localStorage.setItem("userName2","gil-dong");
    // localStorage.setItem("userName3","gil-dong");
    // localStorage.setItem("userName4","gil-dong");
    //(7-1) : 값이 문자열로 저장됨. 
    // const value = [1,2,3,4];
    // localStorage.setItem("value", value);
    //(7-2) : 값이 객체 형식으로 지정되어있으면 object로 저장됨. (객체의 값이 보이지 않음)
    // JSON.stringify(값) 으로 작성하면 문자열로 저장이 됨. 
    // 문자열로 저장이 된 값은 불러올 때 JSON.parse()를 사용해서 객체로 바꿔줌. 
    const value2 = {userName :' gilDong', age : 30, job : '의적'};
    localStorage.setItem("userName", JSON.stringify(value2));
  }

  //삭제하기 버튼 처리 함수
  const handleDelete = () => {
    //(4)
    //삭제 : remove //대상 : item //삭제할 값 : 키 
    localStorage.removeItem("userName");
  }

  //전체 삭제 버튼 처리 함수 
  const handleClear = () => {
    //(6) clear() 는 전체 삭제하는 메서드. 사용법이.clear()임. 괄호안에 값 지정x 
    localStorage.clear();
  }


  return (
    <div>
      <button onClick={handleLoad}>불러오기</button>
      {
        //객체로 불러온 값은 객체를 읽어오는 방식으로 작성해줘야됨.
        data && <p>읽어온 값은 : {data.userName}</p>
      }
      <button onClick={handleSave}>저장하기</button>
      <button onClick={handleDelete}>삭제하기</button>
      <button onClick={handleClear}>전체삭제</button>
    </div>
  )
}

export default Storage