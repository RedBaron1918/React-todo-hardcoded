import Button from "./Button"
export default function Header({title, onAdd,showAddTask}){
   
    
    return(
        <header className="header">
        <h1>{title}</h1>
        {showAddTask ? (<Button color="red" text="Close" onClick={onAdd}/>) :<Button color="green" text="Add" onClick={onAdd}/> }
       

        </header>
    )
    
}
