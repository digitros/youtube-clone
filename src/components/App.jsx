import React, { useState } from "react";
import "../assets/styles/App.styl";

import Nav from "./Nav";
import Main from "./Main";
import Aside from "./Aside";

import { UserProvider } from "./context/UserContext";

const App = () => {
  const [clicked, setClicked] = useState(false);
  const value = { clicked, setClicked };

  return (
    <UserProvider value={value}>
      <Nav />
      <div className="grid">
        <Aside />
        <Main />
      </div>
    </UserProvider>
  );
};

export default App;
