// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function CandidateLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);

//       navigate("/candidate-dashboard");
//     } catch (err) {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h2>Candidate Login</h2>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Email:</label>
//           <br />
//           <input
//             type="email"
//             placeholder="Enter the Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div style={{ marginTop: "10px" }}>
//           <label>Password:</label>
//           <br />
//           <input
//             type="password"
//             placeholder="Enter the password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           style={{ marginTop: "15px", padding: "8px 12px" }}
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CandidateLogin;



// khubsurat banane ke liye tailwind css ka use kia h
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // 👉 Eye Icons (auto available)

function CandidateLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(`http://localhost:5000/api/auth/login`, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      navigate("/candidate-dashboard");
    } catch (err) {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Candidate Login</h2>

        {error && (
          <p className="text-red-500 text-center mb-3 font-medium">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin}>

          {/* Email Input */}
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password Input */}
          <div className="mt-4">
            <label className="block text-gray-700 font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {/* Eye Toggle Button */}
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default CandidateLogin;
