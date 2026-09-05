import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Condition check
    if (age < 18) {
      alert("You must be 18 or older to register!");
      return;
    }

    // ✅ If valid
    alert(
      `Voter Registered:\nName: ${name}\nAge: ${age}\nGender: ${gender}\nAddress: ${address}`
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Voter Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label><br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />

        <label>Age:</label><br />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        /><br /><br />

        <label>Gender:</label><br />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select><br /><br />

        <label>Address:</label><br />
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        /><br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;