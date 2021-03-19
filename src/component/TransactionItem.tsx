import React, { useContext } from "react";
import { TransactionInterface, GlobalContext } from "../context/GlobalContext";
import { Types } from "../context/AppReducer";
type PropsType = {
  transaction: TransactionInterface;
};

const TransactionItem: React.FC<PropsType> = ({
  transaction: { amount, detail, type, id },
}) => {
  const {
    state: { incomes },
    dispatch,
  } = useContext(GlobalContext);
  const percentageExpense = Math.ceil(
    (amount /
      incomes
        .map((el) => el.amount)
        .reduce((prevVal, nextVal) => prevVal + nextVal, 0)) *
      100
  );

  let onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDelete = (e) => {
    e.preventDefault();
    if (type === "inc") {
      dispatch({
        type: Types.DeleteIncome,
        incomeId: id,
      });
    } else {
      dispatch({
        type: Types.DeleteExpense,
        expenseId: id,
      });
    }
  };

  return (
    <div className="item clearfix">
      <div className="item__description">{detail}</div>
      <div className="right clearfix">
        <div className="item__value">
          {type === "inc" ? "+" : "-"} {amount.toFixed(2)}
        </div>
        {type === "exp" && (
          <div className="item__percentage">
            {!Number.isFinite(percentageExpense) ||
            Number.isNaN(percentageExpense)
              ? 0
              : percentageExpense}
            %
          </div>
        )}
        <div className="item__delete">
          <button className="item__delete--btn" onClick={onDelete}>
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
