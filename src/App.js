import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

import React from 'react';
function App() {
  return (
    <div>
      <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
            </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
