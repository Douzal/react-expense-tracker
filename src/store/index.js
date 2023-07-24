import { configureStore } from '@reduxjs/toolkit';
import { expenseSlice } from './expense/expense-slice.js'
// TODO pas bien ?
import { incomeSlice } from './income/income-slice.jsx';

const store = configureStore({
    reducer: {
        // TODO OK ?
        INCOME: incomeSlice.reducer,
        EXPENSE: expenseSlice.reducer,
    },
});

export { store };