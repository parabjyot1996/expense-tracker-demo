import { useState } from "react";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";

const Expenses = (props) => {
  const items = props.expenseData;
  const [filteredYear, setFilteredYear] = useState("2020");

  const expenseFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onFilterChange={expenseFilterHandler}
          initialYear={filteredYear}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
