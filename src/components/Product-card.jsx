import { getProducts } from "../data/products";

export const ProductCard = ({product}) => {
  return (
    <>
      <div style={{ maxWidth: "20%", maxHeight: "10%", padding: "20px 30px" }}>
        <div>
            <div key={product.id}>
              <img src={product.src} width={150} />
              <h4>{product.name}</h4>
              <h5>{product.price}</h5>
            </div>
        </div>
      </div>
    </>
  );
};
