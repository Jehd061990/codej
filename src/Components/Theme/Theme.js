import React, { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [aboutNav, setAboutNav] = useState(false);
  const [workNav, setWorkNav] = useState(false);

  return (
    <ThemeContext.Provider
      value={{ aboutNav, setAboutNav, workNav, setWorkNav }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
