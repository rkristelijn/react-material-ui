import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AccountsView from "./Views/Accounts/AccountsView";
import LoginView from "./Views/Login/LoginView";
import DashboardView from "./Views/Dashboard/DashboardView";
import OrdersView from "./Views/Orders/OrdersView";
import ReportsView from "./Views/Reports/ReportsView";

function App() {
  const url = process.env.PUBLIC_URL;
  return (
    <BrowserRouter>
      <Switch>
        <Route path={url + "/accounts"} component={AccountsView} />
        <Route path={url + "/dashboard"} component={DashboardView} />
        <Route path={url + "/reports"} component={ReportsView} />
        <Route path={url + "/orders"} component={OrdersView} />
        <Route component={LoginView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
