import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import adminRoutes from "./routes/admin/adminRoutes";
const App = () => {
  const routes = adminRoutes();

  return (
    <div>
      <React.StrictMode>
        <Router>
          <Switch>
            {routes.map(({ path, component }, index) => {
              return (
                <Route key={index} path={path} exact component={component} />
              );
            })}
          </Switch>
        </Router>
      </React.StrictMode>
    </div>
  );
};

export default App;
