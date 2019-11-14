import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import registerServiceWorker from "./registerServiceWorker";
import ReactGA from 'react-ga';

const trackingId = "UA-150458220-2"; 
ReactGA.initialize(trackingId);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
