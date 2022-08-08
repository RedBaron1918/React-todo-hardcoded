export default function Button(props){
    return(
        <button onClick={props.onClick} className="btn" style={{backgroundColor:props.color}}>{props.text}</button>
        
    )
}
Button.defaultProps = {
    color:"black",
    text:"click"
}