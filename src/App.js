import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Welcome from "./components/WelcomeUser";
import Chat from "./components/ChatInterface";

function App() {
  return (
    <Router>
      {/* <Main /> */}
      {/* <Chat /> */}
      <Welcome></Welcome>
    </Router>
  );
}

export default App;
