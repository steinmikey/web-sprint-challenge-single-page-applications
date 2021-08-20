import React, { useState, useEfffect } from "react";

import Home from "./Home";
import BuildPizza from "./BuildPizza";

const App = () => {
  return (
    <div>
      <Home className="App" />
      <BuildPizza />
    </div>
  );
};
export default App;
