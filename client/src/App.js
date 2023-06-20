import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Dashboard from "./views/Dashboard";
import SubjectsView from "./views/SubjectsView";
import QuestionView from "./views/QuestionView";
import CategoryView from "./views/CategoryView";
import CategoryEditView from "./views/CategoryEditView";
import NewBoardView from "./views/NewBoardView";
import NewGameView from "./views/NewGameView";
import StartGameView from "./views/StartGameView";

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
                <Route path={''} element={<CategoryView/>}/>
                <Route path={':id'} element={<CategoryEditView/>}/>
            </Route>
              <Route path={'/board'}>
                  <Route path={''} element={<NewBoardView/>}/>
              </Route>
              <Route path={'/games'}>
                    <Route path={''} element={<NewGameView/>}/>
                    <Route path={':id'} element={<StartGameView/>}/>
              </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
