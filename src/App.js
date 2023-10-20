import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AddShop from "./components/addshop.component";
import AddProduct from "./components/addproduct.component";
import Home from "./components/home.component";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Form Application
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addshop">
                Add Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addproduct">
                Add Product
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/addshop" Component={AddShop} />
        <Route path="/addproduct" Component={AddProduct} />
      </Routes>
    </Router>
  );
}

export default App;
