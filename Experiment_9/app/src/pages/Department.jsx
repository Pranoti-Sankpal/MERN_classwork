import { Link, Outlet } from "react-router-dom";

function Departments() {
  return (
    <div>
      <h1>Departments</h1>

      <Link to="faculty">Faculty</Link> | 
      <Link to="syllabus"> Syllabus</Link>

      <Outlet /> {/* Nested route render */}
    </div>
  );
}

export default Departments;