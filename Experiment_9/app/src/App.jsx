import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admission from "./pages/Admission";
import Department from "./pages/Department";
import Faculty from "./pages/Faculty";
import Syllabus from "./pages/Syllabus";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav style={{ background: "#333", padding: "10px" }}>
        <Link to="/" style={{ color: "white", margin: "10px" }}>Home</Link>
        <Link to="/about" style={{ color: "white", margin: "10px" }}>About</Link>
        <Link to="/contact" style={{ color: "white", margin: "10px" }}>Contact</Link>
        <Link to="/admission" style={{ color: "white", margin: "10px" }}>Admission</Link>
        <Link to="/department" style={{ color: "white", margin: "10px" }}>Department</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admission" element={<Admission />} />

        {/* Nested Routes */}
        <Route path="/department" element={<Department />}>
          <Route path="faculty" element={<Faculty />} />
          <Route path="syllabus" element={<Syllabus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;