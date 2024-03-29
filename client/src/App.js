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
import { TalkTrackProvider } from './context/TalkTrackContext';
import {QuestionTableProvider} from "./context/QuestionContext"
import EditBoardView from "./views/EditBoardView"; 
import QuestionEditView from "./views/QuestionEditView";
import PlayerGame from "./components/PlayerGame";
import GameSelection from './views/GameSelection';
import AddUser from './views/AddUser';
import ResetPassword from './views/ResetPassword';
import PlayerGameSelect from './views/PlayerGameSelect';
import RequireAuth from './components/RequireAuth';
import PasswordRecovery from './views/PasswordRecovery';
import TalkTrackRow from './components/talkTrackDashboard/TalkTrackRow';
import TalkTrackDashboard from './views/TalkTrackDashboard';
import NewTalkTrackQuestion from './components/talkTrackQuestion/NewTalkTrackQuestion';
import TalkTrackQuestionsView from './views/TalkTrackQuestionsView';
import TalkTrackCollectionView from './views/TalkTrackCollectionView';
import NewTalkTrackView from './views/NewTalkTrackView';



function App() {
  return (
    <div className="App">
        <SocketProvider>
          <QuestionTableProvider>
            <TalkTrackProvider>
              <Router>
                  <Routes>
                    <Route path="/">
                      <Route path="" element={<Login/>} />
                      <Route path="password-recovery" element={<PasswordRecovery/>} />
                      <Route path="reset_password" element={<ResetPassword/>} />
                      <Route path={'join'}>
                        <Route path="" element={<PlayerGameSelect/>} />
                        <Route path={'jeopardy'}>
                          <Route path={''} element={<JoinGameView/>}/>
                          <Route path={':id'} element={<PlayerGame/>}/>
                        </Route>
                      </Route>
                      <Route path="dashboard" element={<GameSelection/>}/>
                      <Route element={<RequireAuth roles={['admin']}/>}>
                        <Route path="admin">
                          <Route path={'users'} element={<AddUser/>}/>
                        </Route>
                      </Route>
                    </Route>
                    <Route element={<RequireAuth roles={['user', 'admin', 'mgr']}/>}>
                      <Route path={"/jeopardy"}>
                        <Route path="dashboard" element={<Dashboard/>} />
                        <Route path="join" element={<JoinGameView/>} />
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
                        </Route>
                      </Route>
                      <Route path={'/talktrack'}>
                        <Route path={'questions'} element={<TalkTrackQuestionsView/>}/>
                        <Route path={'questions/new'} element={<NewTalkTrackQuestion/>}/>
                        <Route path='collections'>
                          <Route path={''} element={<TalkTrackCollectionView />}/>
                          <Route path={'new'} element={<NewTalkTrackView/>}/>
                        </Route>
                      </Route>
                    </Route>
                  </Routes>
              </Router>
            </TalkTrackProvider>
          </QuestionTableProvider>
        </SocketProvider>
    </div>
  );
}

export default App;
