import { createSlice } from '@reduxjs/toolkit'


const counterSlice = createSlice({
    name:'counter',
    initialState:0,
    reducers:{
        increment:(state, action)=>{
            return state = state+action.payload
        },
        decrement:(state, action)=>{
            return state = state-action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer