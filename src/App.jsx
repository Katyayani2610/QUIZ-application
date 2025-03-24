import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./component/Quiz";
import History from "./component/History";

function App() {
  return (
  <Router>
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Quiz/>} />
        <Route path="/History" element={<History/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
