import { TransactionInterface } from "./GlobalContext";

// types
export enum Types {
  CreateIncome = "CREATE_INCOME",
  DeleteIncome = "DELETE_INCOME",
  CreateExpense = "CREATE_EXPENSE",
  DeleteExpense = "DELETE_EXPENSE",
}

// actions
export type IncomeActions =
  | { type: Types.CreateIncome; incomeData: TransactionInterface }
  | { type: Types.DeleteIncome; incomeId: string };

export type ExpenseActions =
  | { type: Types.CreateExpense; expenseData: TransactionInterface }
  | { type: Types.DeleteExpense; expenseId: string };

// income reducer
export const incomeReducer = (
  state: TransactionInterface[],
  actions: ExpenseActions | IncomeActions
) => {
  switch (actions.type) {
    case Types.CreateIncome:
      return [{ ...actions.incomeData }, ...state];

    case Types.DeleteIncome:
      return [...state.filter((el) => el.id !== actions.incomeId)];

    default:
      return state;
  }
};

// expense reducer
export const expenseReducer = (
  state: TransactionInterface[],
  actions: ExpenseActions | IncomeActions
) => {
  switch (actions.type) {
    case Types.CreateExpense:
      return [{ ...actions.expenseData }, ...state];

    case Types.DeleteExpense:
      return [...state.filter((el) => el.id !== actions.expenseId)];
    default:
      return state;
  }
};
