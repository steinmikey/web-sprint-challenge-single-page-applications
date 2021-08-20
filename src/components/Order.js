import React from "react";

export default function Order(props) {
  const { selections } = props;

  return (
    <div>
      <h4>Your Order</h4>
      You've selected:
      {selections}
    </div>
  );
}
