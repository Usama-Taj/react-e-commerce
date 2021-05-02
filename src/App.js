import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import loginRoutes from "./routes/admin/login";
const App = () => {
  const routes = loginRoutes();

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
