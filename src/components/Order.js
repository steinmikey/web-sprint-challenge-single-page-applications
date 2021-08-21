import React from "react";

export default function Order(props) {
  const { selections } = props;

  return (
    <div>
      <p>Name: {selections.name}</p>
      <p>Size: {selections.size}</p>
      <p>Extra Notes: {selections.specialInstructions}</p>
    </div>
  );
}
