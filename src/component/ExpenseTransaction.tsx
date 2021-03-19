import React, { useContext } from "react";
import { GlobalContext, TransactionInterface } from "../context/GlobalContext";
import TransactionItem from "./TransactionItem";

const ExpenseTransaction = () => {
  const {
    state: { expenses },
  } = useContext(GlobalContext);

  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>

      <div className="expenses__list">
        {expenses.length > 0 &&
          expenses.map((el: TransactionInterface) => (
            <TransactionItem key={el.id} transaction={el} />
          ))}
      </div>
    </div>
  );
};

export default ExpenseTransaction;
