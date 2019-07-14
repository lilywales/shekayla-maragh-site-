import React from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";

const App = () => (
  <main>
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
  </main>
  );

export default App;
