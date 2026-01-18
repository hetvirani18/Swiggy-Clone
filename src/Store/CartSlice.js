import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: "cartSlice",
    initialState: {
        items: [],
        count: 0
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push({...action.payload, quantity: 1});
            state.count ++;
        },
        IncrementItem: (state, action) => {
            const ele = state.items.find((item)=>item.id===action.payload.id);
            ele.quantity += 1;
            state.count ++;
        },
        DecrementItem: (state, action) => {
           const ele = state.items.find((item)=>item.id===action.payload.id);
            if(ele.quantity>1){
                ele.quantity -= 1;
            }
            else{
                state.items = state.items.filter((item)=>item.id!==action.payload.id);
            }
            state.count --;
        }
    }
})

export const {addItems, IncrementItem, DecrementItem} = cart.actions;
export default cart.reducer;