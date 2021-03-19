import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Balance = () => {
  const {
    state: { incomes, expenses },
  } = useContext(GlobalContext);
  const balance =
    incomes
      .map((el) => el.amount)
      .reduce((prevVal, nextVal) => prevVal + nextVal, 0) -
    expenses
      .map((el) => el.amount)
      .reduce((prevVal, nextVal) => prevVal + nextVal, 0);
  const totalIncome = incomes
    .map((el) => el.amount)
    .reduce((prevVal, nextVal) => prevVal + nextVal, 0);
  const totalExpense = expenses
    .map((el) => el.amount)
    .reduce((prevVal, nextVal) => prevVal + nextVal, 0);
  const percentageExpense = Math.round((totalExpense / totalIncome) * 100);

  return (
    <Fragment>
      <div className="budget__value">
        {balance > 0 && "+"} {balance.toFixed(2)}
      </div>

      <div className="budget__income clearfix">
        <div className="budget__income--text">Income</div>
        <div className="right">
          <div className="budget__income--value">
            + {totalIncome.toFixed(2)}
          </div>
          <div className="budget__income--percentage">&nbsp;</div>
        </div>
      </div>

      <div className="budget__expenses clearfix">
        <div className="budget__expenses--text">Expenses</div>
        <div className="right clearfix">
          <div className="budget__expenses--value">
            - {totalExpense.toFixed(2)}
          </div>
          <div className="budget__expenses--percentage">
            {Number.isNaN(percentageExpense) ||
            !Number.isFinite(percentageExpense)
              ? 0
              : percentageExpense}
            %
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Balance;
