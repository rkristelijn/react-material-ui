import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Dashboard from "./Dashboard";
import AccountsView from "./Views/Accounts/AccountsView";
import ContactsView from "./Views/Contacts/ContactsView";
import LoginView from "./Views/Login/LoginView";
import DashboardView from "./Views/Dashboard/DashboardView";
import OrdersView from "./Views/Orders/OrdersView";
import ReportsView from "./Views/Reports/ReportsView";
import IntegrationsView from "./Views/Integrations/IntegrationsView";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/contacts" component={ContactsView} />
        <Route exact path="/accounts" component={AccountsView} />
        <Route exact path="/dashboard" component={DashboardView} />
        <Route exact path="/reports" component={ReportsView} />
        <Route exact path="/integrations" component={IntegrationsView} />
        <Route exact path="/orders" component={OrdersView} />
        <Route component={LoginView} />
      </Switch>
    </Router>
  );
}

export default App;
