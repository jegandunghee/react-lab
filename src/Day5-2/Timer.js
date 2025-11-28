import { useEffect, useState } from 'react';
import styled from './Timer.module.css';

const Timer = () => {

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  //start,stop 버튼 동작 함수 
  //start 누르면 stop버튼 으로 바뀌고 stop버튼 누르면 start버튼으로 바뀌도록 설정함
  const handleStartStop = () => {
    setIsRunning(!isRunning);
  }

  //reset 버튼 동작 함수 
  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  }

  useEffect( () => {
    let intervalID;

    if(isRunning){
      intervalID = setInterval( () => {
        setTime( (prev) => {
          return prev+1;
        })
      }, 1000);
    }
    //useEffect 멈추기 
    return () => {
      clearInterval(intervalID);
    }
  }, [isRunning]);

  //00:00 형식으로 나오도록 처리하기 
  //Math.floor() : 소수점 버리는 메서드 
  const minutes = Math.floor(time/60);
  const seconds = time%60;

  //두자리숫자로 보이도록 함수 설정하기 
  const format = (num) => {
    return String(num).padStart(2,"0")
  }

  return (
    <div className={styled.timer}>
      <p>{format(minutes)} : {format(seconds)}</p>
      <div>
        <button onClick={handleStartStop}>
          {isRunning ? "STOP" : "START"}
        </button>
        <button onClick={handleReset}>RESET</button>
      </div>
    </div>
  )
}

export default Timer