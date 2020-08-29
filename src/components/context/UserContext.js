import React from "react";

const UserContext = React.createContext({
  clicked: false,
  setClicked: (value) => {
    clicked = value;
  },
});

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;
