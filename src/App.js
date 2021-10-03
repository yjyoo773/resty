import React from "react";
import SettingProvider from "./context/settings.js";

import "./design/style.scss";
import Header from "./components/header";
import Home from "./components/home";
import HistoryPage from "./components/history-page";
import Help from "./components/helper";

import Footer from "./components/footer";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <SettingProvider>
      <Header />
      <Switch>
        <Route exact path="/resty" component={Home} />
        <Route exact path="/history" component={HistoryPage} />
        <Route exact path="/help" component={Help} />
      </Switch>
      <Footer />
    </SettingProvider>
  );
};

export default App;
