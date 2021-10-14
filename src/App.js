import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
