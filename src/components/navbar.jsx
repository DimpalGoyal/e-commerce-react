import { Link } from "react-router-dom";

/**
 * Render a top navigation bar with links to Home, Checkout, Sign in, and Sign up.
 *
 * @returns {JSX.Element} A nav element containing left-aligned Home and Checkout links and right-aligned sign in and sign up links.
 */
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