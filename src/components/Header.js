import Button from "./Button"
export default function Header({title, onAdd,showAddTask}){
   
    
    return(
        <header className="header">
        <h1>{title}</h1>
        <Button color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'Close' : 'Add'} onClick={onAdd}/>
       

        </header>
    )
    
}
