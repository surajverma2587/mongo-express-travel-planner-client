import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MyPlans from "./pages/MyPlans";

import "./App.css";
import NewPlan from "./pages/NewPlan";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/plans">
          <MyPlans />
        </Route>
        <Route path="/new-plan">
          <NewPlan />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
