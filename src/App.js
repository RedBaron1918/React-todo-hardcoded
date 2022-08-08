import { useState,useEffect } from "react"
import Tasks from "./components/Tasks"
import Header from "./components/Header"
import AddTask from "./components/AddTask"
export default function App(){
    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const getTasks = async () => {
            const tasks = await fetchData()
            setTasks(tasks)
        }
        getTasks()
    },[])

    const fetchData = async () => {
        const res = await fetch("http://localhost:5000/tasks")
        const data = await res.json()

        return data
    }
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()

        return data
    }
  async function addTask(task){
      const res = await fetch("http://localhost:5000/tasks",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
      })
        const data = await res.json()
        setTasks([...tasks,data])
    }

    async function deleteTask(id){
        await fetch(`http://localhost:5000/tasks/${id}`,{
            method: "DELETE"

        })
        setTasks(tasks.filter(task=>task.id !== id))
    }
    //toggle reminder
    async function toggleReminder(id){
        const tasktoggle = await fetchTask(id)
        const updt = {...tasktoggle,reminder:!tasktoggle.reminder}
        const res = await fetch(`http://localhost:5000/tasks/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updt)
        })
        const data = await res.json()
        setTasks(tasks.map(task=>task.id === id ? {...task,reminder:!data.reminder} : task))
    }
    return(
        <div className="container">
        <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
        {showAddTask && <AddTask addTask={addTask}/>}
        {tasks.length > 0 ?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No tasks to show')}
        </div>
        )
}