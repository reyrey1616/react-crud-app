import React, { useEffect, lazy, Suspense } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./global-styles.jsx";
import { connect } from "react-redux";
import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import { fetchUsersStart } from "./redux/users/user.actions";
const HomePage = lazy(() => import("./pages/homepage/homepage.page"));
const SignUpPage = lazy(() => import("./pages/sign-up/sign-up.page"));
const EditUserPage = lazy(() =>
  import("./pages/edit-user/edit-user.page.container")
);

const App = ({ fetchUsersStart }) => {
  useEffect(() => {
    setTimeout(() => {
      fetchUsersStart();
    }, 500);
  }, [fetchUsersStart]);
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path="/" exact component={HomePage} />
            <Route path="/edit-user/:email" exact component={EditUserPage} />
            <Route path="/add-new" exact component={SignUpPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchUsersStart: () => dispatch(fetchUsersStart()),
});

export default connect(null, mapDispatchToProps)(App);
