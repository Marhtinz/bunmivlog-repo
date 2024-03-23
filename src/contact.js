import { useState } from "react";

const Contact = () => {

const [count, setCunt] = useState(0)
const [school, setSchool] = useState("First School");



const value = 20 + 30;

let name = 'shina'

const names = ['shina', 'John', 'Doe', 'jane', ]

const handleHover = () => {
    console.log("mouse has entered")
}
const handleLeave = () => {
    console.log ("idan lo")
}

const handleClick = () => {
setSchool("Second School");
console.log ("shana wole");
setCunt(count + 1);
};

const handlekey = (e) => {
if (e.key=== "Enter" ){
console.log(e.key)}
console.log (e)
console.log ("key is pressed down")
}

const handlekeydown = () => {
    console.log ("key is up")
}

const handleIncrease = () => {
    if (count === 10) {
        return
    }
    setCunt(count + 1)
}

const handleDecrease = () => {
    if (count === 0) return
    setCunt(count - 1)
}


// state
// react dev tools
// outputting list

// ()=>{} Anonymous function or a callback function

    return ( 
<div className="wrapper"> 
This is the template for bunmi vLog
<button id="btn" 
className="btnclass"
onMouseEnter={handleHover} 
onMouseLeave={handleLeave} 
onClick={handleClick}

>click me please

</button>
<p>{value}</p>
<p>{name}</p>
<div className="school">{school}</div>


{names.map((name)=>{
    return<p>{name}</p>})} 


<p>{count}</p>
<button onClick={handleIncrease}>Increase my wallet</button>
<button onClick={handleDecrease}>Decrease my wallet</button>
<input onKeyDown={(e)=>{handlekey(e)}} onKeyUp={handlekeydown}/>
</div>
     );
}
 
export default Contact;