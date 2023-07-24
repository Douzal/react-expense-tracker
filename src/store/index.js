import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { expenseSlice } from './expense/expense-slice.js'
import { incomeSlice } from './income/income-slice.jsx';
import storage from 'redux-persist/lib/storage';
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { loggerMiddleware } from './middleware/logger-middleware.js';

// voir doc, mais config de reduxPersist
const persistConfig = {
    key: 'root', // pour permettre à redux de chercher dans le cache
    version: 1,
    storage,
    whitelist:['EXPENSE', 'INCOME']
}

// combinaison des reducers
const rootReducers = combineReducers({
    INCOME: incomeSlice.reducer,
    EXPENSE: expenseSlice.reducer,
})

// voir doc
const persistedReducers = persistReducer(persistConfig, rootReducers);

const store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER]
            },
        }).prepend(loggerMiddleware.middleware),
});

// permet de persister
const persistore = persistStore(store)

export { store, persistore };