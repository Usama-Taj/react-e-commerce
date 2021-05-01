import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/admin/Login";
import adminRoutes from "./routes/admin";
const App = () => {
  const routes = adminRoutes();

  return (
    <Router>
      <Switch>
        {routes.map(({ path, component }, index) => {
          return <Route exact key={index} path={path} component={component} />;
        })}
      </Switch>
    </Router>
  );
};

export default App;
