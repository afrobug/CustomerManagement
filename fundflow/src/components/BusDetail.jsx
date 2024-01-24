import React from "react";
import { BusCard } from "./BusCard";

export const BusDetail = ({
    userID,
    img,
    firstName,
    email,
    phone,
}) => {
  return (
    <div>
      <BusCard
        userID={userID}
        img={img}
        firstName={firstName}
        email={email}
        phone={phone}
      />
    </div>
  );
};
