import { useState } from "react"
export default function AddTask({addTask}){
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()
        if(!text){
            alert("Please enter a task")
            return
        }
        addTask({text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)
    }
    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="add task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <div className="form-control">
                <label>day & time</label>
                <input type="text" placeholder="add day and time" value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>

            <div className="form-control form-control-check">
                <label>reminder</label>
                <input type="checkbox" value={reminder} 
                checked={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
             
             <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
    )
}