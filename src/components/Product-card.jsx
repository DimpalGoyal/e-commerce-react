import { Link } from "react-router-dom";
import './card.css'

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
            <div className="btn-actions" style={{display:"flex", gap:"50px"}}>
              <Link to="/details" className="btn-sec">view details</Link>
              <button className="btn-pri">add to cart</button>
            </div>
        </div>
      </div>
    </>
  );
};
