import React from "react";
import { Menu } from "../Components/Menu/Menu";
import { useParams } from "react-router-dom";

export const UIStore = (props) => {
  const { search } = useParams();
  return (
    <div className="flex-hbox">
      <Menu filter={search} />
    </div>
  )
}