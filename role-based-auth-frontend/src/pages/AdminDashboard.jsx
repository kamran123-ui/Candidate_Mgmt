import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPass, setNewPass] = useState("");

  const token = localStorage.getItem("token");

  // Fetch all candidates
  const fetchCandidates = async () => {    
    const res = await axios.get("https://role-based-auth-backend-rc2g.onrender.com/api/admin/candidates", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setCandidates(res.data);
  };

  // Create candidate
  const createCandidate = async () => {
    await axios.post(
      "https://role-based-auth-backend-rc2g.onrender.com/api/admin/create-candidate",
      {
        name: newName,
        email: newEmail,
        password: newPass,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchCandidates();
  };

  // Delete candidate
  const deleteCandidate = async (id) => {
    await axios.delete(
      `https://role-based-auth-backend-rc2g.onrender.com/api/admin/delete-candidate/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchCandidates();
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <h3>Create Candidate</h3>
      <input placeholder="Enter the Name" onChange={(e)=>setNewName(e.target.value)} />
      <input placeholder="Email" onChange={(e)=>setNewEmail(e.target.value)} />
      <input placeholder="Password" onChange={(e)=>setNewPass(e.target.value)} />
      <button onClick={createCandidate}>Create</button>

      <h3>Candidates List</h3>
      {candidates.map((c) => (
        <div key={c._id}>
          {c.name} - {c.email}
          <button onClick={() => deleteCandidate(c._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
