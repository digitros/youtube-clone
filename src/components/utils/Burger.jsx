import React, { useContext } from "react";

import UserContext from "../context/UserContext";

const Burger = () => {
  const { clicked, setClicked } = useContext(UserContext);

  const onClicked = (e) => {
    console.log(e);
    e.preventDefault();
    setClicked(!clicked);
  };

  return (
    <svg
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20px"
      height="20px"
      className="Burger"
      onClick={(e) => {
        onClicked(e);
      }}
    >
      <path d="M0 11H24V13H0zM0 2H24V4H0zM0 20H24V22H0z" />
    </svg>
  );
};

export default Burger;
