import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customers from "./pages/Customer.jsx";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </Router>
  );
}

export default App;