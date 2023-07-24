import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { addExpense } from '../../store/expense/expense-slice.js';

export function ExpenseInput(props) {

  // HOOKS useDispatch pour renvoyer au slice
  const dispatch = useDispatch();

  const isValidPrice = (price) => {
    // console.log(`price : ${price}
    // \ntypeOf(price) : ${typeof(price)}
    // \nprice !== null : ${price !== null}
    // \nprice !== undefined : ${price !== undefined}
    // \ntypeof (price) === 'number' : ${typeof (price) === 'number'}
    // \n price >= 0 : ${ price >= 0}\n\nTOTAL : ${price !== null && price !== undefined && typeof(price) === 'number' && price >= 0}`);
    return (
      price !== null
      && price !== undefined
      && typeof(price) === 'number'
      && price >= 0
    );
  }

  const submit = (e) => {
    e.preventDefault();
    //! ATTENTION formData.get changes every input to String...
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get('name'));
    let price = formData.get('price');
    if (price!=='') price = Number(price)
    if (name !== '' && isValidPrice(price))
      dispatch(addExpense({ name, price }));
  }

  return (
    <form onSubmit={submit}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder='Ex : "Apple"'
            name="name"
          />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Ex: 3.99"
            name="price"
          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button type="submit" className={`btn btn-primary ${style.btn}`}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
