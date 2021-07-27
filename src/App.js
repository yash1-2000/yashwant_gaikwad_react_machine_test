import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Main from "./components/main";
import Player from "./components/player";

import Data from "./data";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main PlayerData={Data} />
          </Route>
          <Route path="/player/:PlayerId">
            <Player PlayerData={Data} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
