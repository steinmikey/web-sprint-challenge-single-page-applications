import React from "react";

export default function PizzaForm(props) {
  const { selections, change, addToOrder, disabled, errors } = props;

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
      <form onSubmit={onSubmit} id="pizza-form">
        <div>
          <h4>What size pizza?</h4>
          <select id="size-dropdown" name="size" value={selections.size} onChange={onChange}>
            <option>--select size--</option>
            <option value="small">Small, 8"</option>
            <option value="medium">Medium, 12"</option>
            <option value="large">Large, 14"</option>
          </select>
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
            <input type="checkbox" name="blackOlives" checked={selections.blackOlives} onChange={onChange} />
            Black Olives
          </label>
          <label>
            <input type="checkbox" name="extraCheese" checked={selections.extraCheese} onChange={onChange} />
            ExtraCheese
          </label>
        </div>
        <div>
          Special Instructions
          <input
            id="special-text"
            type="text"
            name="specialInstructions"
            value={selections.specialInstructions}
            onChange={onChange}
          />
        </div>

        <div>
          Name
          <input
            id="name-input"
            name="name"
            type="text"
            value={selections.name}
            placeholder="name"
            onChange={onChange}
          />
        </div>
        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.size}</div>
        </div>
        <button disabled={disabled} id="order-button">
          Add to Order
        </button>
      </form>
    </div>
  );
}
