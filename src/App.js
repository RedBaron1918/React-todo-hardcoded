import { useState } from "react"
import Tasks from "./components/Tasks"
import Header from "./components/Header"
import AddTask from "./components/AddTask"
export default function App(){
    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([
        {
            id:1,
            text:"Learn React",
            reminder:true,
            day:"Febuary 1st 2022",
        },

        {
            id:2,
            text:"Learn Node",
            reminder:false,
            day:"Febuary 22st 2022",
        },

        {
            id:3,
            text:"Learn MongoDB",
            reminder:false,
            day:"Febuary 23st 2022",
        }
    ])
    function addTask(task){
       const id = Math.floor(Math.random()*1000000) + 1
       const newTask = {id, ...task}
       setTasks([...tasks, newTask])
    }

    function deleteTask(id){
        setTasks(tasks.filter(task=>task.id !== id))
    }
    //toggle reminder
    function toggleReminder(id){
        setTasks(tasks.map(task=>task.id === id ? {...task,reminder:!task.reminder} : task))
    }
    return(
        <div className="container">
        <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
        {showAddTask && <AddTask addTask={addTask}/>}
        {tasks.length > 0 ?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No tasks to show')}
        </div>
        )
}