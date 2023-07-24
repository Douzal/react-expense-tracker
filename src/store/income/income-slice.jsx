import { createSlice } from "@reduxjs/toolkit";

const incomeSlice = createSlice({
    name: 'incomeSlice',
    initialState: {
        // initialIncome: 400,
        // modifiedIncome:initialIncome
        income:400
    },
    reducers: {
        modifyIncome: (currentSlice, action) => {
            currentSlice.modifiedIncome = Number.parseFloat(action.payload);
        }
    }
})

export { incomeSlice };
export const { modifyIncome } = incomeSlice.actions;