import ProductCard from "./ProductCard";
import data from "../data/products.json";

const Product = () => {
  
  const products = data.products;

  return (
    <div className="product">
      {/* <ProductCard 
        title={products[0].title} 
        price={products[0].price}
      /> */}
      {
        products.map((item)=>{
          return <ProductCard 
            key={item.id} 
            title={item.title} 
            price={item.price}
            imgSrc={item.img}/>
        })
      }
  
    </div>
  )
}


export default Product