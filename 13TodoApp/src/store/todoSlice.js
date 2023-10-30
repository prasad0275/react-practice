import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos : [
        {
            id : 1,
            todo: "First todo"
        }
    ]

}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                todo : action.payload
            }
            state.todos.push(todo)
        },
        updateTodo : (state, action) => {
            state.todos = state.todos.map((value)=> value.id!==action.payload? value : value.todo = action.payload)
        },
        deleteTodo : (state, action) => {
            state.todos = state.todos.filter((value) => value.id !== action.payload)
        }
    }
})

export const {addTodo, updateTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
    
