import React from "react";
import { Button } from "../../shared/components/Button"
import { Input } from "../../shared/components/Input";
import { Outlet } from "react-router-dom";

export const UserPanel = () => {
  return (
    <>
      <Outlet/>
      <div>
        <Button/>
        <Input/>
        <Button/>
      </div>
    </>
  )
};
