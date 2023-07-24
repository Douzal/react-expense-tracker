import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
        expenseList: [],
        addExpenseCallCount: 0
    },
    // on crée la clef reducers pour pouvoir créer les ACTIONS
    reducers: {
        // ACTIONS : reçoit de façon cachée les données de la slice
        addExpense: (currentSlice, action) => {
            currentSlice.expenseList.push({
                ...action.payload,
                price: Number.parseFloat(action.payload.price)
            })
        },
        incrementAddExpenseCallCount: (currentSlice, action) => {
            currentSlice.addExpenseCallCount+=1;
        }
    }
})

export const { addExpense, getExpenses, incrementAddExpenseCallCount }
= expenseSlice.actions;