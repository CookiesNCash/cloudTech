import React from "react";
// import { BrowserRouter as Router} from "react-router-dom";
import "materialize-css";
import { useRoutes } from './routes.js'

function App() {
  const routes = useRoutes(false)
  return (
    <div className="container">
      {routes}
    </div>
  )
}

export default App;
