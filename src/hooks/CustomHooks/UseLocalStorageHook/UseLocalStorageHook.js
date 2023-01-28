import { useEffect, useState } from "react";

function getSaveValue(key, value) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  return value;
}

const useLocalStorage = (key, value) => {
  const [updatedValue, setUpdatedValue] = useState(() => {
    return getSaveValue(key, value);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(updatedValue));
  }, [updatedValue]);

  return [updatedValue, setUpdatedValue];
};

export default useLocalStorage;
