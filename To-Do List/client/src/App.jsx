import React from 'react'
import TodoList from './components/TodoList'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
  
const App = () => {
  return (
    <div className='flex min-h-screen w-full justify-center items-center'>
      <TodoList/>  
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
