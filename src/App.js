/**
 * Leave this file alone, All additions to be done in Main.jsx file
 */

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Chat from "./components/Chat";
import EnterEncryption from "./components/EnterEncryption";

function App() {
  return (
    <Router>
      {/* <Main /> */}
      
      <EnterEncryption></EnterEncryption>
    </Router>
  );
}

export default App;
