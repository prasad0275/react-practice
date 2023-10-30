import todoSlice from "./todoSlice"
import {configureStore} from "@reduxjs/toolkit"

const store = configureStore({
    reducer :  todoSlice
    
})

export default store;