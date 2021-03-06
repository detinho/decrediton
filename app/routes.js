// @flow
import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App";
import HomePage from "./components/views/HomePage";
import HistoryPage from "./containers/History";
import SendPage from "./components/views/SendPage";
import ReceivePage from "./components/views/ReceivePage";
import SettingsPage from "./components/views/SettingsPage";
import StakePoolPage from "./components/views/StakePoolPage";
import GetStartedPage from "./containers/GetStarted";
import AccountsPage from "./components/views/AccountsPage";
import WalletError from "./components/views/WalletError";
import Help from "./components/views/Help";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={GetStartedPage} />
    <Route path="/home" component={HomePage} />
    <Route path="/history" component={HistoryPage} />
    <Route path="/send" component={SendPage} />
    <Route path="/receive" component={ReceivePage} />
    <Route path="/settings" component={SettingsPage} />
    <Route path="/proofofstake" component={StakePoolPage} />
    <Route path="/accounts" component={AccountsPage} />
    <Route path="/walletError" component={WalletError} />
    <Route path="/help" component={Help} />
  </Route>
);
