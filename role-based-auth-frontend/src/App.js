// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AdminLogin from "./pages/AdminLogin";
// import CandidateLogin from "./pages/CandidateLogin";
// import AdminDashboard from "./pages/AdminDashboard";
// import CandidateDashboard from "./pages/CandidateDashboard";
// import PrivateRoute from "./components/PrivateRoute";

// function App() {
//   return (
//     <Router>
//       <Routes>

//         {/* Login Pages */}
//         <Route path="/admin-login" element={<AdminLogin />} />
//         <Route path="/candidate-login" element={<CandidateLogin />} />

//         {/* Protected Routes */}
//         <Route
//           path="/admin-dashboard"
//           element={
//             <PrivateRoute role="admin">
//               <AdminDashboard />
//             </PrivateRoute>
//           }
//         />

//         <Route
//           path="/candidate-dashboard"
//           element={
//             <PrivateRoute role="candidate">
//               <CandidateDashboard />
//             </PrivateRoute>
//           }
//         />

//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import CandidateLogin from "./pages/CandidateLogin";
import AdminDashboard from "./pages/AdminDashboard";
import CandidateDashboard from "./pages/CandidateDashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>

        {/* Default Page */}
        <Route path="/" element={<AdminLogin />} />

        {/* Login Pages */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/candidate-login" element={<CandidateLogin />} />
       
        

        {/* Protected Routes */}
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute role="admin">
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/candidate-dashboard"
          element={
            <PrivateRoute role="candidate">
              <CandidateDashboard />
            </PrivateRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
