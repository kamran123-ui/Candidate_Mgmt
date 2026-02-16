import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("https://role-based-auth-backend-rc2g.onrender.com/api/auth/login", {
        email,
        password,
      });

      if (res.data.role !== "admin") {
        alert("Not an admin!");
        return;
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      navigate("/admin-dashboard");

    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <input type="text" placeholder="Enter the Email" onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder="Enter the Password" onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;



