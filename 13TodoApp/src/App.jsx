import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import { useDispatch, useSelector} from "react-redux"
import Todos from './components/Todos'
import { deleteTodo } from './store/todoSlice'

function App() {

  // const todos = useSelector((state) => state.todos)
  // const dispatch = useDispatch()

  // const deleteHandler = (id) =>{
  //   dispatch(deleteTodo(id));
  //   console.log(todos)
  // }

  return (
    <>
    <Input />
    <Todos />
    </>
  )
}

export default App
