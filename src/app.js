import React from "react";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RainbowApplication from "react-rainbow-components/components/Application";
import Admin from "./pages/Admin";
import { HashRouter, Link } from "react-router-dom";
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

// const rootReducer = combineReducers({
//   form: formReducer
// });

// const store = createStore(rootReducer);
const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});
export default function App() {
  return (
      <Router basename="/new-tab-daily-theme" history={history}>
        <RainbowApplication>
          <Route exact path="/" component={Admin} />
        </RainbowApplication>
      </Router>
  );
}
