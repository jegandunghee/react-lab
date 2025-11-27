const EventClick = () => {
  const handleClick = (event)=>{
    // alert('버튼 클릭');
    console.log( event.target );
  }
  return (
    <div className="click">
      <button onClick={handleClick}>클릭!</button>
    </div>
  )
}

export default EventClick