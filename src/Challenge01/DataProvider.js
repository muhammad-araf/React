// DataProvider.js
import React, { createContext, useState } from 'react';

// Create context
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
