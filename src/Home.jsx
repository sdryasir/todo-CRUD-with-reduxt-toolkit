import React from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';

function Home() {
  return (
        <>
        <TodoForm/>
        <TodoList/>
        </>
  )
}

export default Home