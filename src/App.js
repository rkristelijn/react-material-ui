import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Dashboard from "./Dashboard";
import AccountsView from "./Views/Accounts/AccountsView";
import ContactsView from "./Views/Contacts/ContactsView";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/accounts">Accounts</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Dashboard} />
        <Route exact path="/contacts" component={ContactsView} />
        <Route exact path="/accounts" component={AccountsView} />
      </div>
    </Router>
  );
}

export default App;
