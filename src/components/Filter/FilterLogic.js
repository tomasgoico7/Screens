import { useState } from "react";

export const useFilterLogic = (onChange) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    onChange({ name: e.target.value, type });
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
    onChange({ name, type: e.target.value });
  };

  return { name, type, handleNameChange, handleTypeChange };
};
