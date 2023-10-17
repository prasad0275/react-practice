import {createSlice, nanoid} from "@reduxjs/toolkit"
//nanoid generate unique values

const initialState = {
    todos : [
        {
            id : 1,
            text : "First todo",
            
        }
    ]
}

export const todoSlice = createSlice({
    name : 'todo',//name is redux property
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            //overriding todos
            state.todos = state.todos.filter((value)=>(value.id !== action.payload))
        },
        updateTodo : (state, action) => {
            state.todos = state.todos.map((value)=> value.id===action.payload? (value.text = action.payload.text):value )
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer