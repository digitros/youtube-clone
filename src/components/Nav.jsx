import React, { useState } from "react";

import "../assets/styles/Nav.styl";

import Logo from "./utils/Logo";
import Burger from "./utils/Burger";
import search from "../assets/img/search.png";
import Create from "../components/NavButtons/Create";
import Apps from "../components/NavButtons/Apps";
import Notify from "../components/NavButtons/Notify";
import Profile from "../components/NavButtons/Profile";

const Nav = () => {
  const [dropCollection, setCollection] = useState({
    create: false,
    apps: false,
    notify: false,
    profile: false,
  });

  const stateChange = (button, value) => {
    setCollection((dropCollection) => {
      return {
        ...dropCollection,
        create: false,
        apps: false,
        notify: false,
        profile: false,
      };
    });

    switch (button) {
      case "Create":
        setCollection((dropCollection) => {
          return { ...dropCollection, create: value };
        });
        break;
      case "Apps":
        setCollection((dropCollection) => {
          return { ...dropCollection, apps: value };
        });
        break;
      case "Notify":
        setCollection((dropCollection) => {
          return { ...dropCollection, notify: value };
        });
        break;
      case "Profile":
        setCollection((dropCollection) => {
          return { ...dropCollection, profile: value };
        });
        break;
      case Default:
        break;
    }
  };

  return (
    <header>
      <nav className="Nav">
        <div className="Nav__logo">
          <Burger />
          <Logo />
        </div>
        <div className="Nav__search">
          <input type="text" placeholder="Buscar" />
          <div className="search">
            <img src={search} alt="search" />
          </div>
        </div>
        <div className="Nav__icons">
          <Create
            actualDrop={dropCollection.create}
            stateChange={stateChange}
          />
          <Apps actualDrop={dropCollection.apps} stateChange={stateChange} />
          <Notify
            actualDrop={dropCollection.notify}
            stateChange={stateChange}
          />
          <Profile
            actualDrop={dropCollection.profile}
            stateChange={stateChange}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
