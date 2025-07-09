import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoSection}>
        <span style={styles.carrot}>🥕</span>
        <span style={styles.logoText}>
          Veg<span style={styles.highlight}>Life</span>
        </span>
      </div>

      <div style={styles.links}>
        <Link to="/recipes" style={styles.navLink}>Explore</Link>
        <Link to="/add" style={styles.navLink}>➕ Share Recipe</Link>
        <Link to="/saved" style={styles.navLink}>❤️ Favorites</Link>
        <Link to="/login" style={{ ...styles.button, ...styles.loginBtn }}> Login</Link>
        <Link to="/signup" style={{ ...styles.button, ...styles.signupBtn }}> Signup</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "linear-gradient(to right, #fff6d1, #ffe0b2)",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#2d3436",
    fontFamily: "'Segoe UI', sans-serif",
  },
  carrot: {
    fontSize: "1.8rem",
    marginRight: "8px",
  },
  logoText: {
    display: "flex",
    alignItems: "center",
  },
  highlight: {
    color: "#f6b93b",
    marginLeft: "4px",
  },
  links: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  navLink: {
    textDecoration: "none",
    color: "#2d3436",
    fontSize: "1.05rem",
    fontWeight: "500",
    padding: "8px 12px",
    borderRadius: "6px",
    transition: "background 0.3s",
  },
  button: {
    padding: "8px 16px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1rem",
    borderRadius: "8px",
    color: "white",
  },
  loginBtn: {
    backgroundColor: "#f6b93b",
  },
  signupBtn: {
    backgroundColor: "#38ada9",
  },
};
