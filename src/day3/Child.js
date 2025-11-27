const Child = ({count,onChange}) => {
  // console.log(count.count);
  console.log(count);
  return (
    <div className="child">
      <div>Child : {count}</div>
      {/* <button onClick={onChange}>자식에서 카운트 증가</button> */}
      <button onClick={()=>{onChange(count+1)}}>자식에서 카운트 증가</button>
    </div>
  )
}

export default Child