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
            const {id, todo} = action.payload
            console.log(id,todo)
            state.todos = state.todos.map((value)=> value.id!== id? value : {...value, todo })
        },
        deleteTodo : (state, action) => {
            state.todos = state.todos.filter((value) => value.id !== action.payload)
        }
    }
})

export const {addTodo, updateTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
    
