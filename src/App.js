import "./App.css";
import { Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import LeaderboardPage from "./Pages/LeaderboardPage";
import PomodoroPage from "./Pages/PomodoroPage";

function App() {
  // eslint-disable no undef
  return (
    <div className="App">
      <Route path="/" component={LoginPage} exact />
      <Route path="/home" component={HomePage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/leaderboard" component={LeaderboardPage} />
      <Route path="/pomodoro" component={PomodoroPage}></Route>
    </div>
  );
}

export default App;
