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
import GamePlay from "./components/GamePlay";
import JoinGameView from "./views/JoinGameView";
import {SocketProvider} from "./context/SocketContext";
import EditBoardView from "./views/EditBoardView";
import QuestionEditView from "./views/QuestionEditView";
import PlayerGame from "./components/PlayerGame";
import GameSelection from './views/GameSelection';
import AddUser from './views/AddUser';
import ResetPassword from './views/ResetPassword';

function App() {
  return (
    <div className="App">
        <SocketProvider>
          <Router>
              <Routes>
                <Route path="/">
                  <Route path="" element={<Login/>} />
                  <Route path="join" element={<JoinGameView/>} />
                  <Route path="dashboard" element={<GameSelection/>} />
                  <Route path="reset_password" element={<ResetPassword/>} />
                  <Route path="admin">
                    <Route path={'users'} element={<AddUser/>}/>
                  </Route>
                </Route>
                <Route path={"/jeopardy"}>
                  <Route path="dashboard" element={<Dashboard/>} />
                  <Route path={"subjects"}>
                    <Route path={''} element={<SubjectsView/>} />
                    <Route path={':id/questions'} element={<SubjectsView/>} />
                    <Route path={':id/questions/subject'} element={<QuestionView/>}/>
                    <Route path={':id/questions/subject/:subjectId'} element={<QuestionEditView/>}/>
                  </Route>
                <Route path={'categories'}>
                    <Route path={''} element={<CategoryView/>}/>
                    <Route path={':id'} element={<CategoryEditView/>}/>
                </Route>
                  <Route path={'board'}>
                      <Route path={''} element={<NewBoardView/>}/>
                      <Route path={':id'} element={<EditBoardView/>}/>
                  </Route>
                  <Route path={'games'}>
                        <Route path={''} element={<NewGameView/>}/>
                        <Route path={':id'} element={<StartGameView/>}/>
                        <Route path={':id/game'} element={<GamePlay/>}/>
                        <Route path={'join/:id'} element={<PlayerGame/>}/>
                  </Route>
                </Route>
                
              </Routes>
          </Router>
        </SocketProvider>
    </div>
  );
}

export default App;
