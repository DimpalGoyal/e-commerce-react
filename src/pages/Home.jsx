import { ProductCard } from "../components/Product-card.jsx";
import { getProducts } from "../data/products.js";

export default function Home() {
  const products = getProducts()
  return (
    <>
      <div style={{display:"grid", gridTemplateColumns: "repeat(3, 1fr)", gap:"1px" }}>
      {products.map((product)=>(
        <ProductCard key={product.id} product={product}/>
      ))}
      </div>
    </>
  );
}
