import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SavedBooks from "./components/SavedBooks";
import SearchForm from "./components/SearchForm";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import API from "./utils/API";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/Search"]}>
            <Search />
          </Route>
          <Route exact path="/Saved/">
            <Saved />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
