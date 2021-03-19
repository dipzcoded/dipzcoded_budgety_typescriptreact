import React from "react";
import ExpenseTransaction from "./ExpenseTransaction";
import IncomeTransaction from "./IncomeTransaction";

const TransactionContainer = () => {
  return (
    <div className="container clearfix">
      <IncomeTransaction />
      <ExpenseTransaction />
    </div>
  );
};

export default TransactionContainer;
