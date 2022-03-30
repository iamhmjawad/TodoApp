import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  // tasks s
  const [tasks,setTasks] = useState(
    [
      // {
      //     id:1,
      //     text: 'Doctor Appointment',
      //     day:'Feb 5th',
      //     reminder:'true'
      // },
      // {
      //     id:2,
      //     text: 'Plumber Appointment',
      //     day:'Feb 5th',
      //     reminder:'true'
      // },
      // {
      //     id:3,
      //     text: 'Johny Appointment',
      //     day:'Feb 5th',
      //     reminder:'true'
      // }
    ]
  )
  // tasks e

  // Adding a task s
    const addTask= (task)=>{
      const id = Math.floor(Math.random()*10000)+1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
    }
  // Adding a task e

  // Delete Function S
    const deleteTask = (id) =>{
      setTasks(tasks.filter((task)=>task.id !== id))
    }
  // Delete Function e


// Toggle reminder s
const toggleFunction = (id) =>{
  setTasks(tasks.map((task)=>
  task.id === id ? {...task,reminder:!task.reminder}:task
  ))
}
// Toggle reminder e
return (
    <div className="container">
      <Header title="First Huehue APP" onAdd = {()=>{setShowAddTask(!showAddTask)}} showAdd = {showAddTask}/>

      {/* short form of if else, ONLY IF in this case, if showaAddTask true, show add task form else nothing */}
      {showAddTask && <AddTask onAdd={addTask}/>}

      {/* if tasks.length is greater than 0, show tasks else show 'No Tasks to Show' */}
      {tasks.length>0? <Tasks huehue = {tasks} onDelete={deleteTask} 
        onToggle = {toggleFunction} /> :'No Tasks to Show!'
      }

    </div>
  );
}

export default App;
