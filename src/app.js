import React from "react";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RainbowApplication from "react-rainbow-components/components/Application";
import Admin from "./pages/Admin";
import { HashRouter, Link } from "react-router-dom";

// const rootReducer = combineReducers({
//   form: formReducer
// });

// const store = createStore(rootReducer);

export default function App() {
  return (
      <Router basename="/new-tab-daily-theme">
        <RainbowApplication>
          <Route exact path="/" component={Admin} />
        </RainbowApplication>
      </Router>
  );
}
