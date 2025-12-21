




// import { useEffect, useState } from "react";
// import axios from "axios";

// function AdminDashboard() {
// // delete candidate function 
//  const handleDelete = async (id) => {
//   try {
//     await axios.delete(`http://localhost:5000/api/admin/delete-candidate/${id}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     // Refresh list
//     fetchCandidates();
//   } catch (err) {
//     console.log("Error deleting candidate");
//   }
// };

// const [editMode, setEditMode] = useState(false);
// const [editId, setEditId] = useState(null);


// // handle delete function is
// const handleEdit = (candidate) => {
//   setName(candidate.name);
//   setEmail(candidate.email);
//   setMobile(candidate.mobile);
//   setAddress(candidate.address);
//   setPassword(""); // password blank rehta hai
//   setEditId(candidate._id);
//   setEditMode(true);
// };




//   const [candidates, setCandidates] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Form states
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [address, setAddress] = useState("");
//   const [password, setPassword] = useState("");

//   const token = localStorage.getItem("token");

//   // Fetch Candidates
//   const fetchCandidates = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/admin/candidates", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setCandidates(res.data);
//       setLoading(false);
//     } catch (err) {
//       console.log("Error loading candidates");
//     }
//   };

//   useEffect(() => {
//     fetchCandidates();
//   }, []);

//   // Create new candidate
//   const handleCreateCandidate = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post(
//         "http://localhost:5000/api/admin/create-candidate",
//         { name, email, mobile, address, password },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       // Reset fields
//       setName("");
//       setEmail("");
//       setMobile("");
//       setAddress("");
//       setPassword("");

//       // Refresh candidate list
//       fetchCandidates();
//     } catch (err) {
//       console.log("Error creating candidate");
//     }
//   };
  

//   return (
//     <div style={{ padding: "30px" }}>
//       <h2>Admin Dashboard</h2>

//       {/* Create Candidate Form */}
//       <h3>Create New Candidate</h3>

//       <form onSubmit={handleCreateCandidate} style={{ marginBottom: "40px" }}>
//         <div>
//           <input
//             placeholder="Enter the Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <input
//             placeholder="Enter the Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ marginTop: "10px" }}
//           />
//         </div>

//         <div>
//           <input
//             placeholder="Enter the Mobile"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             required
//             style={{ marginTop: "10px" }}
//           />
//         </div>

//         <div>
//           <input
//             placeholder="Enter the Address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             required
//             style={{ marginTop: "10px" }}
//           />
//         </div>

//         <div>
//           <input
//             placeholder="Enter the Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ marginTop: "10px" }}
//           />
//         </div>

//         <button
//           type="submit"
//           style={{
//             marginTop: "15px",
//             padding: "8px 15px",
//             background: "black",
//             borderRadius: "5px",
//             color: "white",
//             // condition me change karne ke liye 
            
//           }}
//         >
//           Create Candidate
//         </button>
//       </form>

//       {/* Candidate Table */}
//       {loading ? (
//         <p>Loading candidates...</p>
//       ) : (
//         <div>
//           <h3>Candidate List</h3>

//           <table border="1" cellPadding="8" style={{ marginTop: "20px" }}>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Mobile</th>
//                 <th>Address</th>
//                 <th>Role</th>
//               </tr>
//             </thead>

//             <tbody>

//                 {candidates.map((candidate) => (
//                <tr key={candidate._id}>
//                  <td>{candidate.name}</td>
//                  <td>{candidate.email}</td>
//                  <td>{candidate.mobile}</td>
//                  <td>{candidate.address}</td>
//                  <td>{candidate.role}</td>
//                  <td>

//                    <button
//                      onClick={() => handleDelete(candidate._id)}
//                      style={{
//                        background: "red",
//                        color: "white",
//                        padding: "5px 10px",
//                        border: "none",
//                        cursor: "pointer",
//                      }}
//                    >
//                      Delete
//                    </button>

//                    <button 
//                          style={{ background: "orange", color: "#fff", padding: "6px 12px", border: "none", cursor: "pointer", marginRight: "10px" }}
//                          onClick={() => handleEdit(candidate)}
//                        >
//                         Edit
//                    </button>

//                  </td>
//                </tr>
//              ))}

                
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminDashboard;






// // // 242 esme thoda feature add hua updateedit ka canceedit ka
// import { useEffect, useState } from "react";
// import axios from "axios";

// function AdminDashboard() {
//   // Candidate Form States
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [address, setAddress] = useState("");
//   const [password, setPassword] = useState("");

//   // Edit States
//   const [editMode, setEditMode] = useState(false);
//   const [editId, setEditId] = useState(null);

//   // Candidate List States
//   const [candidates, setCandidates] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const token = localStorage.getItem("token");

//   // Fetch Candidates
//   const fetchCandidates = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/admin/candidates", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setCandidates(res.data);
//       setLoading(false);
//     } catch (err) {
//       console.log("Error loading candidates");
//     }
//   };

//   useEffect(() => {
//     fetchCandidates();
//   }, []);

//   // Reset form fields
//   const resetForm = () => {
//     setName("");
//     setEmail("");
//     setMobile("");
//     setAddress("");
//     setPassword("");
//     setEditId(null);
//     setEditMode(false);
//   };

//   // --- 1. Create Candidate Function (Original handleCreateCandidate renamed) ---
//   const createCandidate = async () => {
//     try {
//       await axios.post(
//         "http://localhost:5000/api/admin/create-candidate",
//         { name, email, mobile, address, password },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       // Reset fields
//       resetForm();

//       // Refresh candidate list
//       fetchCandidates();
//       alert("Candidate created successfully!");
//     } catch (err) {
//       console.log("Error creating candidate");
//       alert("Error creating candidate");
//     }
//   };

//   // --- 2. Update Candidate Function (From your provided code) ---
//   const updateCandidate = async () => {
//     try {
//       // NOTE: I'm using axios.put here for consistency and convenience,
//       // but the logic is similar to your provided 'fetch' code.
//       await axios.put(
//         `http://localhost:5000/api/admin/update-candidate/${editId}`,
//         { name, email, mobile, address }, // Password is not sent for update
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("Candidate updated successfully!");

//       // Reset fields and mode
//       resetForm();

//       // Refresh candidate list
//       fetchCandidates();
//     } catch (err) {
//       console.log("Update Error: ", err);
//       alert("Update Error");
//     }
//   };

//   // --- Handle Form Submission (Calls Create or Update based on editMode) ---
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editMode) {
//       updateCandidate();
//     } else {
//       createCandidate();
//     }
//   };

//   // delete candidate function
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/admin/delete-candidate/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       // Refresh list
//       fetchCandidates();
//       alert("Candidate deleted successfully!");
//     } catch (err) {
//       console.log("Error deleting candidate");
//       alert("Error deleting candidate");
//     }
//   };

//   // handle edit function
//   const handleEdit = (candidate) => {
//     setName(candidate.name);
//     setEmail(candidate.email);
//     setMobile(candidate.mobile);
//     setAddress(candidate.address);
//     setPassword(""); // password blank rehta hai
//     setEditId(candidate._id);
//     setEditMode(true);
//     // Scroll to the form for better UX
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div style={{ padding: "30px" }}>
//       <h2>Admin Dashboard</h2>

//       {/* Create/Update Candidate Form */}
//       <h3>{editMode ? "Edit Candidate" : "Create New Candidate"}</h3>

//       {/* --- 3. Update the form submission handler to use handleSubmit --- */}
//       <form onSubmit={handleSubmit} style={{ marginBottom: "40px" }}>
//         <div>
//           <input
//             placeholder="Enter the Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <input
//             placeholder="Enter the Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ marginTop: "10px" }}
//           />
//         </div>

//         <div>
//           <input
//             placeholder="Enter the Mobile"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             required
//             style={{ marginTop: "10px" }}
//           />
//         </div>

//         <div>
//           <input
//             placeholder="Enter the Address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             required
//             style={{ marginTop: "10px" }}
//           />
//         </div>

//         <div>
//           <input
//             placeholder="Enter the Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             // Password is only required when creating a new candidate (not in edit mode)
//             required={!editMode} 
//             type="password"
//             style={{ marginTop: "10px" }}
//             // Disable password input in edit mode as per common practice
//             disabled={editMode} 
//           />
//           {editMode && (
//             <small style={{ color: "gray", display: "block" }}>
//               Password cannot be changed in edit mode.
//             </small>
//           )}
//         </div>

//         {/* --- 4. Update the button to show Create/Update based on editMode --- */}
//         <button
//           type="submit"
//           style={{
//             marginTop: "15px",
//             padding: "8px 15px",
//             background: editMode ? "green" : "black", // Color change in edit mode
//             borderRadius: "5px",
//             color: "white",
//           }}
//         >
//           {editMode ? "Update Candidate" : "Create Candidate"}
//         </button>
        
//         {/* Add a Cancel button in edit mode */}
//         {editMode && (
//           <button
//             type="button"
//             onClick={resetForm}
//             style={{
//               marginTop: "15px",
//               padding: "8px 15px",
//               background: "gray",
//               borderRadius: "5px",
//               color: "white",
//               marginLeft: "10px"
//             }}
//           >
//             Cancel Edit
//           </button>
//         )}

//       </form>

//       {/* Candidate Table */}
//       {loading ? (
//         <p>Loading candidates...</p>
//       ) : (
//         <div>
//           <h3>Candidate List</h3>

//           <table border="1" cellPadding="8" style={{ marginTop: "20px" }}>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Mobile</th>
//                 <th>Address</th>
//                 <th>Role</th>
//                 <th>Actions</th> {/* Added Actions column header */}
//               </tr>
//             </thead>

//             <tbody>
//               {candidates.map((candidate) => (
//                 <tr key={candidate._id}>
//                   <td>{candidate.name}</td>
//                   <td>{candidate.email}</td>
//                   <td>{candidate.mobile}</td>
//                   <td>{candidate.address}</td>
//                   <td>{candidate.role}</td>
//                   <td>
//                     <button
//                       onClick={() => handleEdit(candidate)}
//                       style={{ 
//                         background: "orange", 
//                         color: "#fff", 
//                         padding: "5px 10px", 
//                         border: "none", 
//                         cursor: "pointer", 
//                         marginRight: "10px" 
//                       }}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(candidate._id)}
//                       style={{
//                         background: "red",
//                         color: "white",
//                         padding: "5px 10px",
//                         border: "none",
//                         cursor: "pointer",
//                       }}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminDashboard;







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
