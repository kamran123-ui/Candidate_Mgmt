

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from 'lucide-react';

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      navigate("/admin-dashboard");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Invalid Credentials kamran";
      setError(errorMessage);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-600 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-white tracking-wide drop-shadow-lg">
          Admin Login
        </h2>

        {error && (
          <p className="p-3 text-sm font-medium text-red-800 bg-red-200/80 rounded-lg border border-red-300 animate-shake">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email Address
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-3 rounded-xl bg-white/80 shadow-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-gray-800 placeholder-gray-500"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              id="password"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-3 pr-12 rounded-xl bg-white/80 shadow-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-gray-800 placeholder-gray-500"
            />

            <div
              className="absolute inset-y-0 right-0 top-8 pr-4 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-600" aria-hidden="true" />
              ) : (
                <Eye className="h-5 w-5 text-gray-600" aria-hidden="true" />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 transition-transform duration-200 hover:-translate-y-1"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;




// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// // Lucide icons import करें
// import { Eye, EyeOff } from 'lucide-react';

// function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   // नया state: पासवर्ड की विजिबिलिटी को ट्रैक करने के लिए
//   const [showPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });

//       // Token save
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);

//       // Redirect
//       navigate("/admin-dashboard");
//     } catch (err) {
//       // यदि err.response मौजूद है, तो सर्वर का error message दिखाएँ
//       const errorMessage = err.response?.data?.message || "Invalid Credentials";
//       setError(errorMessage);
//     }
//   };

//   // फ़ंक्शन जो शो/हाइड को टॉगल करता है
//   const togglePasswordVisibility = () => {
//     setShowPassword(prevShowPassword => !prevShowPassword);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
//         <h2 className="text-2xl font-bold text-center text-gray-900">Admin Login</h2>

//         {error && (
//           <p className="p-3 text-sm font-medium text-red-700 bg-red-100 rounded-lg">
//             {error}
//           </p>
//         )}

//         <form onSubmit={handleLogin} className="space-y-4">
//           {/* Email Input */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
//             <input
//               id="email"
//               placeholder="Enter the Email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>

//           {/* Password Input (with Show/Hide Toggle) */}
//           <div className="relative"> {/* Relative position eye icon के लिए आवश्यक है */}
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
//             <input
//               id="password"
//               placeholder="Enter the password"
//               // State के आधार पर type को text या password पर सेट करें
//               type={showPassword ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-10" // pr-10 आइकन के लिए स्पेस देता है
//             />
            
//             {/* Eye Icon */}
//             <div
//               className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center cursor-pointer"
//               onClick={togglePasswordVisibility}
//             >
//               {/* ShowPassword state के आधार पर Eye या EyeOff आइकन दिखाएँ */}
//               {showPassword ? (
//                 <EyeOff className="h-5 w-5 text-gray-400" aria-hidden="true" />
//               ) : (
//                 <Eye className="h-5 w-5 text-gray-400" aria-hidden="true" />
//               )}
//             </div>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AdminLogin;