import React from "react";
import { BusCard } from "./BusCard";

export const BusDetail = ({
    userID,
    img,
  busName,
  arrivalTime,
  departureTime,
}) => {
  return (
    <div>
      <BusCard
        userID={userID}
        img={img}
        busName={busName}
        arrivalTime={arrivalTime}
        departureTime={departureTime}
      />
    </div>
  );
};
