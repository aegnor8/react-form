import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5">
      <h2>Welcome to the Form Application!</h2>
      <Link to="/addshop" className="btn btn-primary">
        Add Shop
      </Link>
      <Link to="/addproduct" className="btn btn-primary">
        Add Product
      </Link>
    </div>
  );
}

export default Home;
