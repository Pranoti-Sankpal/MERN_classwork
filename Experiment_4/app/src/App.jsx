import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header style={{ background: "#333", color: "white", padding: "10px" }}>
        <h1>My College Website</h1>
      </header>

      <nav style={{ background: "#555", padding: "10px" }}>
        <a href="#" style={{ color: "white", marginRight: "10px" }}>Home</a>
        <a href="#" style={{ color: "white", marginRight: "10px" }}>About</a>
        <a href="#" style={{ color: "white", marginRight: "10px" }}>Courses</a>
        <a href="#" style={{ color: "white" }}>Contact</a>
      </nav>

      <section style={{ padding: "20px" }}>
        <h2>Welcome to Our College</h2>
        <p>This is a simple Single Page Application using React.</p>
      </section>
      <footer style={{ background: "#333", color: "white", padding: "10px" }}>
        <p>© 2026 My College</p>
      </footer>
    </div>
  );
}

export default App;