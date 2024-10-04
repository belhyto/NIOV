import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "layouts/dashboard"; // Your existing dashboard
import Mission23 from "pages/Mission23"; // Import the new Mission23 component

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/mission1" component={Mission1} /> {/* Assuming you have this component */}
        <Route path="/dashboard/mission23" component={Mission23} /> {/* Add this line for Mission 23 */}
        <Redirect from="*" to="/dashboard" /> {/* Redirect any unknown routes to the dashboard */}
      </Switch>
    </Router>
  );
}