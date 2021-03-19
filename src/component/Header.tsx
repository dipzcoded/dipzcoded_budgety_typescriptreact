import React from "react";
import Balance from "./Balance";
import { displayMonth, displayYear } from "../utlity";

const Header = () => {
  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in {displayMonth()}{" "}
          <span className="budget__title--month">{displayYear()}</span>:
        </div>
        <Balance />
      </div>
    </div>
  );
};

export default Header;
