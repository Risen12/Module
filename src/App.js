import React from "react";
import "./Styles/App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Cabinet from "./Pages/Cabinet";
import ModulePage from "./Pages/ModulePage";
import Autorization from "./Pages/Autorization";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Autorization/>}></Route>
          <Route path="/Cabinet" element={<Cabinet/>}></Route>
          <Route path="/ModulePage" element={<ModulePage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
