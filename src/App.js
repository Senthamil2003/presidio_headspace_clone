
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./Component/Main/Main";
import Home from "./Component/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Home" element={<Main />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
