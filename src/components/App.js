import React, { useState, useEfffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import PizzaForm from "./PizzaForm";
import Order from "./Order";
import axios from "axios";

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

const initialOrders = [];

export default function App() {
  const [orders, setOrders] = useState(initialOrders);
  const [selections, setSelections] = useState(initialSelections);

  const getOrder = () => {
    axios.get();
  };

  const postNewOrder = (newOrder) => {
    axios.post(`https://reqres.in/api/orders`, newOrder).then((res) => {
      // setFriends([res.?, ...orders])
    });
  };

  const inputChange = (name, value) => {
    // validate(name, value);
    setSelections({ ...selections, [name]: value });
  };

  const formSubmit = () => {
    const newOrder = {
      name: selections.name,
      size: selections.size,
      pepperoni: selections.pepperoni,
      sausage: selections.sausage,
      canadianBacon: selections.canadianBacon,
      spicyItalianSausage: selections.spicyItalianSausage,
      onion: selections.onion,
      greenPeppers: selections.greenPeppers,
      blackOlives: selections.blackOlives,
      extraCheese: selections.extraCheese,
    };
    postNewOrder(newOrder);
  };

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
