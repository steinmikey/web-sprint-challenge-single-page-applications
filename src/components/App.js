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
  specialInstructions: "",
  pepperoni: false,
  sausage: false,
  blackOlives: false,
  extraCheese: false,
};

const initialFormErrors = {
  name: "",
};

const initialOrders = [];
const initialDisabled = true;

export default function App() {
  const [orders, setOrders] = useState(initialOrders);
  const [selections, setSelections] = useState(initialSelections);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
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
    axios
      .post(`https://reqres.in/api/orders`, newOrder)
      .then((res) => {
        setOrders([res.data.data, ...orders]);
        setSelections(initialSelections);
        setFormErrors(initialFormErrors);
      })
      .catch((err) => console.error(err));

    // setSelections(initialSelections);
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setSelections({ ...selections, [name]: value });
  };

  const formSubmit = () => {
    const newOrder = {
      name: selections.name.trim(),
      size: selections.size,
      pepperoni: selections.pepperoni,
      sausage: selections.sausage,
      blackOlives: selections.blackOlives,
      extraCheese: selections.extraCheese,
      specialInstructions: selections.specialInstructions.trim(),
    };
    postNewOrder(newOrder);
    console.log(newOrder);
  };

  // useEffect(() => {
  //   getOrders();
  // }, []);

  useEffect(() => {
    schema.isValid(selections).then((valid) => setDisabled(!valid));
    // console.log(selections);
    // console.log(disabled);
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
        <Route path="/pizza">
          <PizzaForm
            selections={selections}
            change={inputChange}
            addToOrder={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />

          {/* <Route path="/pizza">
            <Order selections={selections} />
          </Route> */}
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
