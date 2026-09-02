import Header from "./components/Header";
import CourseCard from "./components/CourseCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* Header with props */}
      <Header title="My College Website" />

      <h1 style={{ padding: "10px" }}>Courses Offered</h1>

      {/* Course Cards with props */}
      <CourseCard name="Computer Engineering" duration="4 Years" fees="₹1,00,000" />
      <CourseCard name="Mechanical Engineering" duration="4 Years" fees="₹90,000" />
      <CourseCard name="Civil Engineering" duration="4 Years" fees="₹80,000" />

      {/* Footer with props */}
      <Footer text="© 2026 My College" />
    </div>
  );
}

export default App;