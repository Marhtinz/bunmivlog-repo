const Contact = () => {

const value = 20 + 30;

let name = 'shina'

const handleHover = () => {
    console.log("mouse has entered")
}
const handleLeave = () => {
    console.log ("idan lo")
}

const handleClick = () => {
    console.log ("shana wole")
}

const handlekey = (e) => {
if (e.key=== "Enter" ){
console.log(e.key)}
console.log (e)
console.log ("key is pressed down")

}

const handlekeydown = () => {
    console.log ("key is up")
}
    return ( 
<div className="wrapper"> 
This is the template for bunmi vlog
<button id="btn" className="btnclass"onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={handleClick}>click me please</button>
<p>{value}</p>
<p>{name}</p>
<input onKeyDown={(e)=>{handlekey(e)}} onKeyUp={handlekeydown}/>

</div>
     );
}
 
export default Contact;