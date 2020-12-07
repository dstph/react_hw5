import React from 'react';
import Routing from'./components/Routing/Routing';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={Routing}/>
      </Router>
    </div>
  );
}

export default App;
