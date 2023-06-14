import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Dashboard from "./views/Dashboard";
import SubjectsView from "./views/SubjectsView";
import QuestionView from "./views/QuestionView";
import CategoryView from "./views/CategoryView";


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path={"/subjects"}>
                <Route path={''} element={<SubjectsView/>} />
                <Route path={':id/questions'} element={<SubjectsView/>} />
                <Route path={':id/questions/subject'} element={<QuestionView/>}/>
            </Route>
            <Route path={'/categories'}>
                <Route path={''} element={<CategoryView/>} />
            </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
