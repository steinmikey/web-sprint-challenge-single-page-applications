import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

import schema from "../validation/formSchema";
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

const initialOrders = [];
const initialDisabled = true;

export default function App() {
  const [orders, setOrders] = useState(initialOrders);
  const [selections, setSelections] = useState(initialSelections);
  const [disabled, setDisabled] = useState(initialDisabled);

  // const getOrders = () => {
  //   axios
  //     .get(`https://reqres.in/api/orders`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

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

  // useEffect(() => {
  //   getOrders();
  // }, []);

  useEffect(() => {
    schema.isValid(selections).then((valid) => setDisabled(!valid));
  }, [selections]);

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
