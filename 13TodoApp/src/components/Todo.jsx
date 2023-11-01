import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../store/todoSlice";

function Todo({ id, todo }) {
    const [editable, setEditable] = useState(false)
    const [todoValue, setTodoValue] = useState(todo)
    const dispatch = useDispatch()
    const updateHandler = () => {
        setEditable(!editable)
        dispatch(updateTodo({id,todo:todoValue}))
    }
    return (
        <><div
        style={{
            backgroundColor : "#212121",
            padding : "10px 40px",
            color : "white",
            display : "flex",
            alignItems : "center",
            borderRadius : "10px",
            margin : "10px 0",
            justifyContent : "space-between"
    
            }}
            > 
            {
                editable ? 
                <input type="text" name="" id="" placeholder="Enter the task..." value={todoValue}
                    style={{
                        padding: "15px 20px",
                        borderRadius: "10px",
                        margin: "0px 20px"
                    }}
                    onChange={(e) => { setTodoValue(e.target.value)}}/>

                :
                <div>{todoValue}</div>
            }
                

            <div style={{
            }}>


                <button style={{
                    padding: "10px 20px",
                    backgroundColor: "blue",
                    margin: "10px 20px",
                    color: "white"
                }}
                    onClick={updateHandler}
                >
                    {
                        editable ? "Save" : "Edit"
                    }
                </button>


                <button style={{
                    padding: "10px 20px",
                    margin: "10px 20px",
                    backgroundColor: "red",
                    color: "white",
                }}
                    onClick={() => { dispatch(deleteTodo(id)) }}
                >Delete</button>
            </div> </div>
        </>
    )
}

export default Todo;