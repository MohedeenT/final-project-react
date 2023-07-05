import React from "react";
import AccessoriesList from "./AccessoriesList";
import accessories from "../data/accessories";

const ListView = () => {
  return <AccessoriesList accessories={accessories} />;
};

export default ListView;
