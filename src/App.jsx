import { useState } from 'react'
import './App.css'
import TaskList from './TaskList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main-containor">
       <h1>TODO LIST</h1>
       <button>Add Task</button> 
       <TaskList />
    </div>
    </>
  )
}

export default App
