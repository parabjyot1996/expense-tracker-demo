import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const DUMMYEXPENSE = [
    { id: "e1", title: "Car Insurance", amount: "10,000", date: new Date(2021, 10, 10) },
    { id: "e2", title: "Groceries", amount: "1,000", date: new Date(2022, 5, 7) },
    { id: "e3", title: "Food", amount: "500", date: new Date(2022, 1, 1) },
  ];

  const [expenses, setExpenses] = useState(DUMMYEXPENSE);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenseData={expenses} />
    </div>
  );
};

export default App;
