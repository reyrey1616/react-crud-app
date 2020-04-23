import React, { lazy, Suspense } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./global-styles.jsx";
import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
const HomePage = lazy(() => import("./pages/homepage/homepage.page"));
const SignUpPage = lazy(() => import("./pages/sign-up/sign-up.page"));

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path="/" exact component={HomePage} />
            <Route path="/add-new" exact component={SignUpPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

export default App;
