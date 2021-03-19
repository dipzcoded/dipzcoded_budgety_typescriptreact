import { TransactionInterface } from "./context/GlobalContext";
export const displayYear = () => {
  return new Date().getFullYear();
};

export const displayMonth = () => {
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthArray[new Date().getMonth()];
};

export const saveToDB = (
  data1: TransactionInterface[],
  data2: TransactionInterface[]
): void => {
  let incomes = JSON.parse(localStorage.getItem("incomes") || "[]");
  let expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
  if (!incomes.length && !expenses.length) {
    localStorage.setItem("incomes", JSON.stringify(data1));
    localStorage.setItem("expenses", JSON.stringify(data2));
  } else {
    localStorage.setItem("incomes", JSON.stringify(data1));
    localStorage.setItem("expenses", JSON.stringify(data2));
  }
};
