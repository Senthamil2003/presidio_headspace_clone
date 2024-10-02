import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./Component/Main/Main";
import Home from "./Component/Home/Home";
import MyHeadspace from "./Component/MyHeadspace/MyHeadspace";
import HeadspaceOptions from "./Component/HeadspaceOptions/HeadspaceOptions";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="myHeadspace" element={<MyHeadspace />}>
          <Route path="sample" element={<HeadspaceOptions />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
