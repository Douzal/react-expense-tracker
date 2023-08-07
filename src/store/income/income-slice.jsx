import { createSlice } from "@reduxjs/toolkit";

export const incomeSlice = createSlice({
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

export const { modifyIncome } = incomeSlice.actions;