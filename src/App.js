import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import AdminPage from "./AdminPage";
import AdminPage from "./pages/AdminPage";
// import SearchPage from "./SearchPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/admin" style={{ marginRight: "10px" }}>Admin</Link>
          <Link to="/search">Search</Link>
        </nav>
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
