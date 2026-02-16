

import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchCandidates = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/candidates", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setCandidates(res.data);
      setLoading(false);
    } catch (err) {
      console.log("Error loading candidates");
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const resetForm = () => {
    setName("");
    setEmail("");
    setMobile("");
    setAddress("");
    setPassword("");
    setEditId(null);
    setEditMode(false);
  };

  const createCandidate = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/admin/create-candidate",
        { name, email, mobile, address, password },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      resetForm();
      fetchCandidates();
      alert("Candidate created successfully!");
    } catch (err) {
      alert("Error creating candidate");
    }
  };

  const updateCandidate = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/admin/update-candidate/${editId}`,
        { name, email, mobile, address },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Candidate updated successfully!");
      resetForm();
      fetchCandidates();
    } catch (err) {
      alert("Update Error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editMode ? updateCandidate() : createCandidate();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/delete-candidate/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCandidates();
      alert("Candidate Deleted Successfully!");
    } catch (err) {
      alert("Error deleting candidate");
    }
  };

  const handleEdit = (candidate) => {
    setName(candidate.name);
    setEmail(candidate.email);
    setMobile(candidate.mobile);
    setAddress(candidate.address);
    setPassword("");
    setEditId(candidate._id);
    setEditMode(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">
          Admin Dashboard
        </h2>

        <div className="bg-white p-6 rounded-xl shadow-lg mb-10">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            {editMode ? "Edit Candidate" : "Create New Candidate"}
          </h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-500" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-500" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <input className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-500" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
            <input className="border p-2 rounded-md focus:ring-2 focus:ring-indigo-500" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />

            <input
              placeholder="Password"
              type="password"
              className={`border p-2 rounded-md focus:ring-2 focus:ring-indigo-500 ${editMode ? "bg-gray-200 cursor-not-allowed" : ""}`}
              disabled={editMode}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={!editMode}
            />

            <div className="col-span-2 flex gap-3">
              <button type="submit" className={`${editMode ? "bg-green-600 hover:bg-green-700" : "bg-indigo-600 hover:bg-indigo-700"} text-white px-4 py-2 rounded-lg transition`}>
                {editMode ? "Update" : "Create"}
              </button>

              {editMode && (
                <button type="button" onClick={resetForm} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition">
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Candidate Table */}
        {loading ? (
          <p className="text-center text-gray-600">Loading candidates...</p>
        ) : (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Candidate List</h3>

            <table className="w-full border text-sm text-center">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="p-2">Name</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Mobile</th>
                  <th className="p-2">Address</th>
                  <th className="p-2">Role</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>

              <tbody>
                {candidates.map((candidate) => (
                  <tr key={candidate._id} className="border-b hover:bg-gray-100">
                    <td className="p-2">{candidate.name}</td>
                    <td className="p-2">{candidate.email}</td>
                    <td className="p-2">{candidate.mobile}</td>
                    <td className="p-2">{candidate.address}</td>
                    <td className="p-2">{candidate.role}</td>

                    <td className="p-2 flex justify-center gap-2">
                      <button className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 text-white text-xs rounded-md" onClick={() => handleEdit(candidate)}>
                        Edit
                      </button>
                      <button className="bg-red-600 hover:bg-red-700 px-3 py-1 text-white text-xs rounded-md" onClick={() => handleDelete(candidate._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
