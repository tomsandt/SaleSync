import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customer from "./pages/Customer.jsx";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/customer" element={<Customer pathName="customer"/>} />
            <Route path="/test" element={<Customer pathName="test"/>} />
        </Routes>
      </Router>
  );
}

export default App;