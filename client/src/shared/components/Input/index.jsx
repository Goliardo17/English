import React from "react";
import { InputUserPanel } from "./components/InputUserPanel";

export const Input = (type, placeholder) => {
  const setInput = () => {
    switch (type) {
      case "input-user-panel":
        return <InputUserPanel className={type} placeholder={placeholder}/>
      default:
        return <input disabled placeholder="Default input" />;
    }
  };

  return <>{setInput()}</>
};
