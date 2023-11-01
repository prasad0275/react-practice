import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../store/todoSlice";
import  Todo  from "./Todo"
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
                todos.map((value) => (
                    <div key={value.id}> 
                    <Todo id={value.id} todo={value.todo} />
                    </div>
                )
                
                )
            }
              
              
            

        </>
    )
}
export default Todos;