import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../store/todoSlice";

function Todos() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    const [editable, setEditable] = useState(false)

    const updateHandler = () => {
        setEditable(!editable)
    }

    useEffect(()=>{console.log(todos)},[])
    return (
        <>
            {
                todos.map((value) => 
                <div key={value.key} 
                style={{
                    backgroundColor : "grey",
                    padding : "10px 20px",
                    color : "black",
                    display : "flex",
                    alignItems : "center",
                    borderRadius : "10px",
                    margin : "10px 0",
                    justifyContent : "space-between"
            
                    }}
                    > 
                        {
                               editable  ?
                               <input type="text" name="" id="" placeholder="Enter the task..." value={value.todo}
                                style={{
                                padding : "15px 20px",
                                borderRadius : "10px",
                                margin : "0px 20px"
                                }}
                                onChange={()=>{}}/>
                                :
                                <div>{value.todo}</div>
                            }
                        <div style={{
                        }}>
                            

                            <button style={{
                            padding : "10px 20px",
                            backgroundColor : "blue",
                            margin : "10px 20px",
                            color : "white"
                            }}
                            onClick={updateHandler}
                            >
                            {
                                editable ? "Save" : "Edit"
                            }
                            </button>
            
            
                            <button style={{
                                padding : "10px 20px",
                                margin : "10px 20px",
                                backgroundColor : "red",
                                color : "white",
                            }}
                            onClick={()=>{dispatch(deleteTodo(value.id))}}
                            >Delete</button>
                        </div>
                        
                    </div>
            
                )
            }
              
              
            

        </>
    )
}
export default Todos;