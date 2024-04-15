import { useState } from 'react'
import './App.css'
import TodoList from './TodoList';

function App() {
  const [task, setTask] = useState('');
  const [tasks, handleTasks] = useState([]);

  // GETTING TASK INPUT VALUE
  const getTask = (e) => {
    setTask(e.target.value);
  }

  //ADDING TASKS
  const addTask = () => {
    handleTasks((prevTask) => {
      return [
        ...prevTask,
        task
      ];
    })
    setTask('');
  }
  
  //HANDLING TASK DELETION
  const deleteTask = (id) => {
    return handleTasks((prevTask) => {
      return prevTask.filter((items, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <div>
        <h2 className="font-bold text-[30px]">TO-DO-LIST</h2>
        <div>
          <div className="mb-4">
          <input className="rounded h-10 p-4" type="text" placeholder="Type here..." value={task} onChange={getTask}/>
          <button onClick={addTask}>ADD</button>
          </div>
          <div>
            <ol>
              {tasks.map((taskVal, index) => {
                return <TodoList
                  text={taskVal}
                  key={index}
                  id={index}
                  onSelect={deleteTask}
                />
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
