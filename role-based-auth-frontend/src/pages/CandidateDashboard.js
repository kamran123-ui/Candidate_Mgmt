// import { useEffect, useState } from "react";
// import axios from "axios";

// function CandidateDashboard() {
//   const [profile, setProfile] = useState(null);
//   const token = localStorage.getItem("token");

//   const fetchProfile = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:5000/api/candidate/profile",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setProfile(res.data);
//     } catch (err) {
//       console.log("Error loading profile");
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Candidate Dashboard</h2>

//       {!profile ? (
//         <p>Loading profile...</p>
//       ) : (
//         <div style={{ marginTop: "20px" }}>
//           <h3>My Profile</h3>
//           <p><strong>Name:</strong> {profile.name}</p>
//           <p><strong>Email:</strong> {profile.email}</p>
//           <p><strong>Role:</strong> {profile.role}</p>
//           <p><strong>Mobile:</strong> {profile.mobile}</p>
//           <p><strong>Address:</strong> {profile.address}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CandidateDashboard;



// khubsura banane ke liye new code 
import { useEffect, useState } from "react";
import axios from "axios";

function CandidateDashboard() {
  const [profile, setProfile] = useState(null);
  const token = localStorage.getItem("token");

  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/candidate/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProfile(res.data);
    } catch (err) {
      console.log("Error loading profile");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center text-blue-600">
          Candidate Dashboard
        </h2>

        {!profile ? (
          <div className="text-center mt-6">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-3 text-gray-600 font-medium">Loading profile...</p>
          </div>
        ) : (
          <div className="mt-6 space-y-3">
            <h3 className="text-xl font-semibold text-gray-700 text-center border-b pb-2">
              My Profile
            </h3>

            <div className="bg-gray-50 shadow-sm rounded-lg p-4 space-y-2">
              <p>
                <span className="font-semibold text-gray-600">Name:</span> {profile.name}
              </p>
              <p>
                <span className="font-semibold text-gray-600">Email:</span> {profile.email}
              </p>
              <p>
                <span className="font-semibold text-gray-600">Role:</span> {profile.role}
              </p>
              <p>
                <span className="font-semibold text-gray-600">Mobile:</span> {profile.mobile}
              </p>
              <p>
                <span className="font-semibold text-gray-600">Address:</span> {profile.address}
              </p>
            </div>

            {/* Logout Button */}
            <button
              onClick={() => {
                localStorage.clear();
                window.location.href = "/candidate-login";
              }}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold mt-4 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CandidateDashboard;
