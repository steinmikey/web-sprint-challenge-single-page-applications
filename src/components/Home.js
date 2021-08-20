import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Build Your Own Pizza!</h1>
      <Link to="/order-pizza">
        <button id="start-order">Start an order</button>
      </Link>

      <Link to="/pizza">
        <button>Show order(s)</button>
      </Link>
    </div>
  );
}
