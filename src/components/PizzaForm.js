import React from "react";

export default function PizzaForm(props) {
  const { selections, change, addToOrder, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    addToOrder();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    // const nameToUse = type === "text" ? id : name;
    const valueToUse = type === "checkbox" ? checked : value;

    change(name, valueToUse);
  };

  return (
    <div>
      <h3>Build your pizza:</h3>
      <form onSubmit={onSubmit} id="pizza-form">
        <div>
          <h4>What size pizza?</h4>
          <select id="size-dropdown">
            <option value="">--select a size--</option>
            <option value="small">Small, 8"</option>
            <option value="medium">Medium, 12"</option>
            <option value="large">Large, 14"</option>
          </select>
        </div>

        {/* <div>
          <h4>What sauce would you like?</h4>
          <label>
            <input type="radio" name="original-red" />
            Original Red
          </label>
          <label>
            <input type="radio" name="barbecue" />
            BBQ
          </label>
        </div> */}
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
            <input type="checkbox" name="canadianBacon" checked={selections.canadianBacon} onChange={onChange} />
            Canadian Bacon
          </label>
          <label>
            <input
              type="checkbox"
              name="spicyItalianSausage"
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
            <input type="checkbox" name="greenPeppers" checked={selections.greenPeppers} onChange={onChange} />
            Green Peppers
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
        {/* <div>Crust substitute</div> */}
        <div>
          Special Instructions
          <input id="special-text" type="text" />
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
        {/* <div>How Many?</div> */}
        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.size}</div>
        </div>
        <button disabled={false} id="order-button">
          Add to Order
        </button>
      </form>
    </div>
  );
}
