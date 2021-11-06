import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EachCar{
    id: number;
    title: string;
    description: string;
    image: string;
    range: string;
    time: number;
    topSpeed: number;
    peakPower: number;
}

interface initialCars{
    values: EachCar[];
}

const initialState:initialCars = {
    values: []
}

const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers:{
        setCars: (state, action: PayloadAction<EachCar[]>) => {
            action.payload.forEach(eachCar => state.values.push(eachCar));
        }
    }
})

export default carSlice.reducer;

export const {setCars} = carSlice.actions;