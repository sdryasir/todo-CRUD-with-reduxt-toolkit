import { createSlice } from '@reduxjs/toolkit'

const initialState = {todos:[]}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodo:(state, action)=>{
            state = state.todos.filter((todo)=>todo.id != action.payload)
            return {todos: state}
        }
    }
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer