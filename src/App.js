import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Router, Switch } from "react-router";
import "./App.css";
import Login from "./components/Login";
function App() {
  return (
    <div
      style={{
        backgroundImage: "url(/bg.png)",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        width: "100%",
        height: "100vh",
        // border: "10px solid blue",
      }}
      className="fluid-container"
    >
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Router> */}
      <Login />
    </div>
  );
}

export default App;
