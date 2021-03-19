import React, { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TransactionInterface, GlobalContext } from "../context/GlobalContext";
import { Types } from "../context/AppReducer";
import { saveToDB } from "../utlity";
type TransactionDetail = {
  type: string;
  detail: string;
  amount: number;
};

const AddTransactionForm = () => {
  // context
  const {
    state: { expenses, incomes },
    dispatch,
  } = useContext(GlobalContext);

  // my state
  const [transaction, setTransaction] = useState<TransactionDetail>({
    type: "inc",
    detail: "",
    amount: 0,
  });
  // destructing my transaction object
  const { type, detail, amount } = transaction;
  // onChange func
  let onChange: (e: any) => void;
  // onSubmit func emiited by button
  let onSumbit: (e: React.MouseEvent<HTMLButtonElement>) => void;

  // creating the funcs
  onChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };
  onSumbit = (e) => {
    e.preventDefault();
    let newTransaction: TransactionInterface = {
      id: uuidv4(),
      detail,
      amount: Math.abs(Number(amount)),
      type,
    };
    if (type === "inc") {
      dispatch({
        type: Types.CreateIncome,
        incomeData: newTransaction,
      });
    } else {
      dispatch({
        type: Types.CreateExpense,
        expenseData: newTransaction,
      });
    }
    setTransaction({
      type: "inc",
      detail: "",
      amount: 0,
    });
  };

  useEffect(() => {
    saveToDB(incomes, expenses);
  }, [incomes, expenses]);

  return (
    <div className="add">
      <div className="add__container">
        <select
          name="type"
          className={`add__type ${type === "exp" && "debt"}`}
          value={type}
          onChange={onChange}
        >
          <option value="inc">+</option>
          <option value="exp">-</option>
        </select>
        <input
          type="text"
          name="detail"
          value={detail}
          className={`add__description ${type === "exp" && "debt"}`}
          placeholder="Add description"
          onChange={onChange}
        />
        <input
          type="number"
          name="amount"
          className={`add__value ${type === "exp" && "debt"}`}
          placeholder="Value"
          value={amount}
          onChange={onChange}
        />
        <button
          className={`add__btn ${type === "exp" && "debt"}`}
          onClick={onSumbit}
          disabled={!detail || !amount}
        >
          <i className="bx bx-check-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default AddTransactionForm;
