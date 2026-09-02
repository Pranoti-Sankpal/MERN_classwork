import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Student Registered:\nName: ${name}\nEmail: ${email}\nCourse: ${course}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label><br />
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />

        <label>Email:</label><br />
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <label>Course:</label><br />
        <select 
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select</option>
          <option value="CSE">CSE</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Civil">Civil</option>
        </select><br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;