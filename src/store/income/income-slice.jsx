import { createSlice } from "@reduxjs/toolkit";

const incomeSlice = createSlice({
    name: 'incomeSlice',
    initialState: {
        income:400
    },
    reducers: {
        modifyIncome: (currentSlice, action) => {
            currentSlice.income = Number.parseFloat(action.payload);
        }
    }
})

export { incomeSlice };
export const { modifyIncome } = incomeSlice.actions;