import "./App.css";
import { Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={LoginPage} exact />
      <Route path="/home" component={HomePage} />
    </div>
  );
}

export default App;
