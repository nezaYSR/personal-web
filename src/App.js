/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/// CSS | SCSS
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

/// JS
import "jquery/dist/jquery.min.js";

/// LAYOUTS
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import Sidebar from "./components/layouts/sidebar";

// PAGES
import Home from "./components/pages/home";
import Dev from "./components/pages/dev";
import Industrial from "./components/pages/industrial";
import Exhibition from "./components/pages/exhibition";

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Route exact path="/" component={Home} />
      <Route exact path="/dev" component={Dev} />
      <Route exact path="/industrial" component={Industrial} />
      <Route exact path="/exhibition" component={Exhibition} />
      <Footer />
    </Router>
  );
}

export default App;
