import { useState } from 'react';

 const useLocalStorage = (key, initialValue) => {
  // define some state --> will receive an initial value to set up our localStorage property
  const item = JSON.parse(window.localStorage.getItem(key));

  const [storedValue, setStoredValue] = useState(item || initialValue);

  // define a setter function that set's a value to localStorage when called, also set our state property to the new value
  const setValue = value => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  return [storedValue, setValue];
};

export default useLocalStorage