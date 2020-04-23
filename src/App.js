import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./global-styles.jsx";
import HomePage from "./pages/homepage/homepage.page";
import SignUpPage from "./pages/sign-up/sign-up.page";
import Header from "./components/header/header.component";
const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/add-new" exact component={SignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
