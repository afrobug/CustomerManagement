import React from "react";

export const CusCard = ({ userID, img, firstName, email, phone }) => {
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
          {firstName}
        </div>
        <div style={{ flex: 1 }}>EMP{userID}</div>
        <div style={{ flex: 1 }}>{email}</div>
        <div style={{ flex: 1 }}>{phone}</div>
      </div>
    </div>
  );
};
