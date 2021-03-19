import React, { createContext, useReducer } from "react";
import {
  incomeReducer,
  expenseReducer,
  ExpenseActions,
  IncomeActions,
} from "./AppReducer";

// defining the data structure of my states
export interface TransactionInterface {
  id: string;
  detail: string;
  amount: number;
  type: string;
}

interface TransactionObj {
  incomes: TransactionInterface[];
  expenses: TransactionInterface[];
}

const initialState: TransactionObj = {
  incomes: JSON.parse(localStorage.getItem("incomes") || "[]"),
  expenses: JSON.parse(localStorage.getItem("expenses") || "[]"),
};

// create context
export const GlobalContext = createContext<{
  state: TransactionObj;
  dispatch: React.Dispatch<IncomeActions | ExpenseActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

// global reducer
const mainReducer = (
  { expenses, incomes }: TransactionObj,
  action: IncomeActions | ExpenseActions
) => ({
  incomes: incomeReducer(incomes, action),
  expenses: expenseReducer(expenses, action),
});

// provider component
export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
