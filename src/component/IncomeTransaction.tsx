import React, { useContext } from "react";
import { GlobalContext, TransactionInterface } from "../context/GlobalContext";
import TransactionItem from "./TransactionItem";

const IncomeTransaction = () => {
  const {
    state: { incomes },
  } = useContext(GlobalContext);
  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>

      <div className="income__list">
        {incomes.length > 0 &&
          incomes.map((el: TransactionInterface) => (
            <TransactionItem key={el.id} transaction={el} />
          ))}
      </div>
    </div>
  );
};

export default IncomeTransaction;
