import { ProductCard } from "../components/Product-card.jsx";
import { getProducts } from "../data/products.js";

/**
 * Render the home page as a 3-column grid of product cards.
 *
 * Renders a container with three equal-width columns and a 1px gap, containing a ProductCard for each product.
 * @returns {JSX.Element} A React element containing the grid of ProductCard components.
 */
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