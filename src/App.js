import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import UserForm from "./pages/userForm";
import UserTable from "./pages/userTable";
import Navigation from "./Components/Navigation";
import { navigationLinks } from "./const.js"

function App() {
  return(
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path={navigationLinks.userForm.href}>
            <UserForm />
          </Route>
          <Route path={navigationLinks.userTable.href}>
            <UserTable />
          </Route>
          <Route path="/">
            <UserForm />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
