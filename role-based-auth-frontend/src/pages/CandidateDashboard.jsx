import { useEffect, useState } from "react";
import axios from "axios";

const CandidateDashboard = () => {
  const [profile, setProfile] = useState(null);
  const token = localStorage.getItem("token");
  const API = process.env.REACT_APP_API_URL;

  const fetchProfile = async () => {
    const res = await axios.get(`${API}/api/candidate/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setProfile(res.data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Candidate Dashboard</h2>

      {profile ? (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CandidateDashboard;
