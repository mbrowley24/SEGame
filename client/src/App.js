import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Dashboard from "./views/Dashboard";
import SubjectsView from "./views/SubjectsView";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path={"/subjects"}>
                <Route path={''} element={<SubjectsView/>} />
            </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
