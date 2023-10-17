import React from "react";
import "./Containers.css";
import Product from "./Product";
import Settings from "./settings/Settings";
import './Containers.css';

const Containers = () => {
  return (
    <section id="containers">
      <div className="container">
        <Product />
        <div className="product__modify">
          <Settings />
          <div className="settings"></div>
        </div>
      </div>
    </section>
  );
};

export default Containers;
