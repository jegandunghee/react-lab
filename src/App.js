import Card from './Day2/Card';
import './app.css';

const App = () => {


  return(

    // 화면에 보여지는 영역 
    //jsx 문법을 사용해서 작성함 
    <div className='card-wrap'>
    <Card file = "1" title = 'Day1'/>
    <Card file = "2" title = 'Day2'/>
    <Card file = "3" title = 'Krew Day' />
    </div>
  );
}

export default App;