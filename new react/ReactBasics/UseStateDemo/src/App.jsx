import { useState} from "react"
import student from "./Student"

function App(){

let [count,setount] = useState(0)
let handleClick = ()->{
    setCount(count+1)
    console.log('Count: ',count);
}
let dbutton = {
  border:"1px solid #ddd"
  padding : "15px"
  width: "150px"
}
return(
  <>
  <h3>Example for Props and State</h3>
  <Students name = "keerthana"/>
  <hr></hr>
  <h3>State Example</h3>
  <p>Count: [count]</p>
  <button onClick={han
    dleClick} style={dbutton}>Increment </button>
  </>
)