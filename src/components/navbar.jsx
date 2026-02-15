import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 60px",
        }}
      >
        <div
          className="navbar-container"
          style={{ display: "flex", gap: "10px" }}
        >
          <Link to="/">Home</Link>
          <Link to="/checkout">Checkout</Link>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <Link to="/auth">sign in</Link>
          <Link to="/auth">sign up</Link>
        </div>
      </nav>
    </>
  );
}
