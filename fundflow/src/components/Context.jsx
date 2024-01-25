import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [modalData, setModalData] = useState([]);
  const updateTable = (newData) => {
    setModalData(newData);
  };
  return (
    <ModalContext.Provider value={{ modalData, updateTable }}>
      {children}
    </ModalContext.Provider>
  );
};
