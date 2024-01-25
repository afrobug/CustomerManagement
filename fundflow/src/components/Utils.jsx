import React, { useState } from "react";

// const [modalData, setModalData] = useState([]);

// // Function to update table data
// const updateTableData = (newData) => {
//   setModalData(newData);
// };

let modalData = [];

// Function to update table data
const updateTableData = (newData) => {
  modalData = newData;
};

// Example usage
const newDataArray = [
  /* your new data here */
];
updateTableData(newDataArray);

console.log("modelData", modalData);

export const obj1 = {
  modalData,
  updateTableData,
};
