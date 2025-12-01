const TestFetch = () => {
  const handleLoad = ()=>{
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((data)=>{ console.log(data)});
  }
  return (
    <div className="test-fetch">
      <button onClick={handleLoad}>게시글 불러오기</button>
      <h2>결과표시</h2>
      <pre></pre>
    </div>
  )
}

export default TestFetch