import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { addExpense, incrementAddExpenseCallCount } from '../expense/expense-slice.js';
import { modifyIncome } from '../income/income-slice.jsx';

export const loggerMiddleware = createListenerMiddleware();
loggerMiddleware.startListening({
    // actions que l'on veut écouter
    // predicate: (action) => {
    //     const actionList = [
    //         'expenseSlice/addExpense',
    //         'incomeSlice/modifyIncome'
    //     ]
    //     // on ne veut que les actions de type addExpense
    //     return actionList.includes(action.type);
    // },
    
    // matcher remplace predicate, plus simple si plusieurs actions
    // need import les actions
    matcher: isAnyOf(addExpense, modifyIncome),

    // ce que l'on veut faire (asynchrone)
    effect: async (action, listenerAPI) => {
        console.log(action);
        if(action.type==='expenseSlice/addExpense') {
            listenerAPI.dispatch(incrementAddExpenseCallCount())
        }
        console.log(listenerAPI.getState());
    }
});