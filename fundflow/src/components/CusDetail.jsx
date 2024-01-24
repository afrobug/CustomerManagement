import React from "react";
import { CusCard } from "./CusCard";

export const CusDetail = ({ userID, img, firstName, email, phone }) => {
  return (
    <div>
      <CusCard
        userID={userID}
        img={img}
        firstName={firstName}
        email={email}
        phone={phone}
      />
    </div>
  );
};
