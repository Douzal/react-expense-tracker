import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
        expenseList: [
            // état initial
            // { name: 'Ordinateur', price: '300' },
            // { name: 'Coucougnette', price: '1300' },
            // { name: 'Pacs d\'amour véritable', price: '3300' },
        ]
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
        getExpenses: (currentSlice, action) => {
            return currentSlice.expenseList;
        }
    }
})

// EXPORT DE L'ACTION, on y a accès via nomAction.actions
// export const addExpense = expenseSlice.actions.addExpense;
export const { addExpense, getExpenses } = expenseSlice.actions;