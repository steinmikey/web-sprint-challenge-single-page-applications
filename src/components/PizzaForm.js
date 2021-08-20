import React from "react";

export default function PizzaForm(props) {
  const { selections, change, addToOrder, disabled } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    addToOrder();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;

    change(name, valueToUse);
  };

  return (
    <div>
      <h3>Build your pizza:</h3>
      <form>
        <div>
          <h4>What size pizza?</h4>
          <select id="size-dropdown">
            <option value="">--select a size--</option>
            <option value="small">Small, 8"</option>
            <option value="medium">Medium, 12"</option>
            <option value="large">Large, 14"</option>
          </select>
        </div>

        <div>
          <h4>What sauce would you like?</h4>
          <label>
            <input type="radio" name="original-red" />
            Original Red
          </label>
          <label>
            <input type="radio" name="barbecue" />
            BBQ
          </label>
        </div>
        <div className="topping-checkboxes">
          <h4>Add Your Toppings</h4>
          <label>
            <input type="checkbox" name="pepperoni" checked={selections.pepperoni} onChange={onChange} />
            Pepperoni
          </label>
          <label>
            <input type="checkbox" name="sausage" checked={selections.sausage} onChange={onChange} />
            Sausage
          </label>
          <label>
            <input type="checkbox" name="canadian-bacon" checked={selections.canadianBacon} onChange={onChange} />
            Canadian Bacon
          </label>
          <label>
            <input
              type="checkbox"
              name="spicy-italian-sausage"
              checked={selections.spicyItalianSausage}
              onChange={onChange}
            />
            Spicy Italian Sausage
          </label>
          <label>
            <input type="checkbox" name="onions" checked={selections.onions} onChange={onChange} />
            Onions
          </label>
          <label>
            <input type="checkbox" name="green-peppers" checked={selections.greenPeppers} onChange={onChange} />
            Green Peppers
          </label>
          <label>
            <input type="checkbox" name="black-olives" checked={selections.blackOlives} onChange={onChange} />
            Black Olives
          </label>
          <label>
            <input type="checkbox" name="extra-cheese" checked={selections.extraCheese} onChange={onChange} />
            ExtraCheese
          </label>
        </div>
        {/* <div>Crust substitute</div> */}
        <div>
          Special Instructions
          <input id="special-text" type="text" />
        </div>

        <div>
          Name
          <input id="name-input" type="text" placeholder="name" onChange={onChange} />
        </div>
        {/* <div>How Many?</div> */}
        <button id="order-button" disabled={disabled}>
          Add to Order
        </button>
      </form>
    </div>
  );
}
