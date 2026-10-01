import React, { useState } from 'react' ;

const App = () => {
  let tasks = []
  let [task,setTask] = useState("")
  let [tasks,setTask] = useState([])

  let addTask = ()=>{
    setTasks([...tasks,task])
    setTask("")
  }

  return(
    <div>
      <h3>ToDo App Demo</h3>
      <div>
        <input
        type = 'text'
        placeholder='Eneter Task'
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        <ol>

        </ol>
      </div>
      
      {
        tasks.map()
      }
    </div>

  );
}
