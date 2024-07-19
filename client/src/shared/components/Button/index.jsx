import React from "react";
import { ButtonUserPanel } from "./components/ButtonUserPanel";

export const Button = (type, label) => {
  const setButton = () => {
    switch (type) {
      case "button-user-panel":
        return <ButtonUserPanel className={type} label={label} />;
      default:
        return <button disabled>Default button</button>;
    }
  };

  return <>{setButton()}</>;
};
