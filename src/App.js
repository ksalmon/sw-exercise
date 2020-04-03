import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import AppStore from './state/store'
import AppNav from './components/AppNav'
import CharacterDashboard from './scenes/CharacterDashboard'
import CharacterShow from './scenes/CharacterShow'

const App = () => {
  return ( 
    <AppStore>
      <Router>
        <AppNav />
        <Switch>
          <Route path="/people/:id" component={CharacterShow} />
          <Route path="/" component={CharacterDashboard} />
        </Switch>
      </Router>
    </AppStore>
  );
}

export default App;