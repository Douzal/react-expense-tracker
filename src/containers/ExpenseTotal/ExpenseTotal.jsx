import { useSelector } from "react-redux";
import style from "./style.module.css";
import { getExpenses } from "store/expense/expense-slice.js";

export function ExpenseTotal() {

  const totExpensesList = useSelector(store => store.EXPENSE.expenseList);
  const totExpenses = totExpensesList?.length > 0 ?
    totExpensesList.reduce((acc, curr) => {
      return (acc + Number.parseFloat(curr.price));
    }, 0) : 0;

  const income = useSelector(store => store.INCOME.income);
  const remainingMoney = income - totExpenses;


  return (
    <div>
      <div className="row">
        <div className={`col ${style.label}`}>Total expenses</div>
        <div className={`col ${style.amount}`}>{totExpenses} €</div>
      </div>
      <div className="row">
        <div className={`col ${style.label}`}>Remaining money</div>
        <div className={`col ${style.amount}`}>{remainingMoney} €</div>
      </div>
    </div>
  );
}
