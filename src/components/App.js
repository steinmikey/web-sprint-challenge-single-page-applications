import React, { useState, useEfffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import PizzaForm from "./PizzaForm";
import Order from "./Order";

const initialSelections = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  spicyItalianSausage: false,
  onion: false,
  greenPeppers: false,
  blackOlives: false,
  extraCheese: false,
};

export default function App() {
  const [selections, setSelections] = useState(initialSelections);

  const inputChange = (name, value) => {
    // validate(name, value);
    setSelections({ ...selections, [name]: value });
  };
  console.log(selections);
  return (
    <div>
      <nav>
        <h1>LAMBDA EATS</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
        </div>
      </nav>

      <Switch>
        <Route path="/order-pizza">
          <PizzaForm selections={selections} change={inputChange} />
          <Route path="/pizza">
            <Order selections={selections} />
          </Route>
        </Route>
        {/* <Route>
        <Help />
      </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
