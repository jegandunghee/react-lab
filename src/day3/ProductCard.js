
const ProductCard = ({title,price,imgSrc}) => {

  // 퍼블릭 경로 지정 필요 
  const publicURL = process.env.PUBLIC_URL;

  return (
    <div className="product-card">
      <img src={`${publicURL}/img/${imgSrc}.png`} alt="상품이미지"/>
      <h3>{title}</h3>
      <p>{price}원</p>
    </div>
  )
}

export default ProductCard