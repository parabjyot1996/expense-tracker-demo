import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };

    props.onAddExpense(expenseData);
  };

  const newExpenseHandler = () => {
    setShowExpenseForm(true);
  };

  const cancelClickHandler = () => {
    setShowExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!showExpenseForm && (
        <button type="button" onClick={newExpenseHandler}>
          Add New Expense
        </button>
      )}
      {showExpenseForm && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClick={cancelClickHandler}/>
      )}
    </div>
  );
};

export default NewExpense;
