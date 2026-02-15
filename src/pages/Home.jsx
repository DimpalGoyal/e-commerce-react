import { ProductCard } from "../components/Product-card";

export default function Home() {
  return (
    <>
      <div className="home">
        <h1>home page</h1>
        <div className="home-container" style={{display:"flex"}}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
      </div>
    </>
  );
}
