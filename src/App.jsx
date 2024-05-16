import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Pages/Registration";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Register" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
