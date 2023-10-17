import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"
function Todos() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    return (
        <>
            <h3>
                Todos
            </h3>
            <ul>
                {
                    todos.map((value) => (

                        <li key={value.id}>{
                            value.text}
                            <button onClick={() => dispatch(removeTodo(value.id))} >X</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default Todos