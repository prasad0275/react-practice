import {useDispatch} from "react-redux"
import { addTodo } from "../store/todoSlice";
import { useState } from "react";

function Input(){
    const [input, setInput] = useState()
    const dispatch = useDispatch()
    const addTodoHandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("")
    }
    return(
        <div style={{
            display : "flex",
            alignItems : "center",
            justifyContent : "center"
        }}>
        <input type="text" name="" id="" placeholder="Enter the task..." value={input}
        style={{
        padding : "15px 20px",
        borderRadius : "10px",
        margin : "0px 20px"
        }}
        onChange={(e)=>{setInput(e.target.value)}}/>
        <button style={{
            padding : "10px 20px",
            backgroundColor : "green",
            color : "white",
        }}
        onClick={addTodoHandler}>Add</button>
        </div>
    )
}
export default Input;