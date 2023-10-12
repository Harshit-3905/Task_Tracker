import "./App.css";
import { Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import LeaderboardPage from "./Pages/LeaderboardPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={LoginPage} exact />
      <Route path="/home" component={HomePage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/leaderboard" component={LeaderboardPage} />
    </div>
  );
}

export default App;
