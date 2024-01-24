import React from "react";

export const BusCard = ({
  userID,
  img,
  busName,
  arrivalTime,
  departureTime,
}) => {
  return (
    <div style={{ background: "white", width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
          margin: "10px",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        <div style={{ flex: 1 }}>
          <img
            src={img}
            alt="customerProfile"
            width={30}
            height={30}
            style={{ margin: "5px" }}
          ></img>
          {busName}
        </div>
        <div style={{ flex: 1 }}>EMP{userID}</div>
        <div style={{ flex: 1 }}>{arrivalTime}</div>
        <div style={{ flex: 1 }}>{departureTime}</div>
      </div>
    </div>
  );
};
