import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./global-styles.jsx";
import HomePage from "./pages/homepage/homepage.page";
import SignUpPage from "./pages/sign-up/sign-up.page";

// import { createUser } from "./firebase/firebase.utils";
const App = () => {
  // useEffect(() => {
  //   createUser("guidoriagaorey16@gmail.com", "reyrey123", {
  //     firstName: "rey",
  //     middleName: "gaspalinao",
  //     lastName: "guidoriagao",
  //   });
  // }, [createUser]);

  return (
    <div className="App">
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={SignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
