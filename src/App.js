/**
 * Leave this file alone, All additions to be done in Main.jsx file
 */

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

function App() {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Main />
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
