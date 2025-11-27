import { useState } from "react"

const ToDoList = () => {
  const [text,setText] = useState('');
  const [todos,setTodos] = useState(
    ["오늘의 수업 리엑트","리엑트 추가"]
  );
  const handleChange = (e)=>{
    setText(e.target.value);
  }
  const handleKeyDown = (e)=>{
    if( e.key === 'Enter' ){
      // console.log( "엔터키를 눌렀을" );
      // setTodos((prevTodos)=>{
      //   //이전값을 이용해서 새로운 배열
      //   const updated = [...prevTodos,text];
      //   return updated;
      // });
      setTodos(prev=>[...prev,text]);
      setText('');
    }
  }
  const handleDelete = (index)=>{
    //todos 배열에서 index에 해당되는 정보를 제외
    //새로운 값이 만들어져야 함 : index값을 제외하고 나머지 값으로
    // setTodos((prev)=>{
    //   const updated = prev.filter((_,i)=>{ return i !== index});
    //   return updated;
    // });
    setTodos(prev=>prev.filter((_,i)=> i !== index));
  }
  return (
    <div className="todo-list">
      <h1>오늘 해야 할 일</h1>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={text} 
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <ul>
        {
          todos.map((value,idx)=>{
            return (
              <li key={idx}>
                <span>▶ {value}</span>
                <button onClick={()=>{handleDelete(idx)}}>×</button>
              </li>
            )
          })
        }
      </ul>     
    </div>
  )
}

export default ToDoList