import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  BrowserRouter
} from "react-router-dom";
import './App.css';
import PersonalPage from './Components/PersonalPage/PersonalPage';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <Redirect exact path="/" to="/home"></Redirect>
        <div className="App">
          <Switch>
            <Route exact path="/home">
              <PersonalPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
