import { configureStore } from "@reduxjs/toolkit";
import carReducer from '../features/carsSlice'

const store = configureStore({
    reducer:{
        cars: carReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;