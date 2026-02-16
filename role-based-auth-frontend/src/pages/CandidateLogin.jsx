import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CandidateLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/login`, {
        email,
        password,
      });

      if (res.data.role !== "candidate") {
        alert("Not a candidate!");
        return;
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      navigate("/candidate-dashboard");

    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Candidate Login</h2>
      <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default CandidateLogin;
