import { useSelector, useDispatch } from "react-redux";
import style from "./style.module.css";
// import { expenseSlice } from "store/expense/expense-slice.js";
import { modifyIncome } from "store/income/income-slice.jsx";

export function IncomeInput() {

  // DISPATCH
  const dispatch = useDispatch();

  const initialIncome = useSelector(store => store.INCOME.income);
  
  const setNewIncome = (e) => {
    const newIncome = e.target.value
    dispatch(modifyIncome(newIncome));
  }

  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${style.label}`}>Income</div>
      <div className="col-6">
        <input
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
          defaultValue={initialIncome}
          onChange={setNewIncome}
          />
      </div>
    </div>
  );
}
