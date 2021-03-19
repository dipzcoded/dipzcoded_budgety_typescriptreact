import React from "react";
import "./App.css";
import AddTransactionForm from "./component/AddTransactionForm";
import TransactionContainer from "./component/TransactionContainer";
import { GlobalProvider } from "./context/GlobalContext";

// components
import Header from "./component/Header";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="bottom">
        <AddTransactionForm />
        <TransactionContainer />
      </div>
    </GlobalProvider>
  );
};

export default App;
