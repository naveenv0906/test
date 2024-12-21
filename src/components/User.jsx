import React from "react";
import Data from "./Data"

function User() {
  const userData = {
    name: "naveen",
    age: 21,
    phone: 1234567890,
    email: "naveen@gmail.com",
  };

  return (
    <>
      <div className="">
        <Data
        {...userData}
        />
      </div>
    </>
  );
}

export default User;
