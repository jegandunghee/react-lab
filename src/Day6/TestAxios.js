import axios from "axios";
import { useState } from "react";
const TestAxios = () => {
  const [data,setData] = useState({});
  const handleLoad = async ()=>{
    await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response)=>{setData(response.data)})
    .catch((error)=>{
      console.log( "API에러:",error);
    });
  }
  return (
    <div>
      <button onClick={handleLoad}>게시글 가져오기</button>
      <h2>결과보기</h2>
      {
        // data && <pre>{JSON.stringify(data)}</pre>
        data && (
          <>
            <h3>TITLE : {data.title}</h3>
            <p>본문 : {data.body}</p>
          </>
        )
      }
      
    </div>
  )
}

export default TestAxios