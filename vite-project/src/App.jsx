import Appname from "./components/Appname"
import Apptodo from "./components/Apptodo"
import Todoitem from "./components/Todoitem"
import "./App.css" 
import Items from "./components/Items"
import { useState } from "react"
import Welcomemsg from "./components/Welcomemsg"

function App (){
const [todoitems,settodoitems]=useState([]);
let handlenewitem=(itemname,itemdate) =>{
  console.log(`to do name ${itemname} date : ${itemdate}`)
  let newitems= [...todoitems , {name:itemname,duedate:itemdate} ]
  settodoitems(newitems)
}

let handledeleteitem = (deleteitem) => {
  let newitems = todoitems.filter((item)=> item.name !== deleteitem )
  settodoitems(newitems)
  console.log(`Item deleted : ${deleteitem}`)
}

 return <center class='to-do-container'>
  <Appname></Appname>
 
 <Apptodo onnewitem={handlenewitem}></Apptodo>
     {todoitems.length === 0 && <Welcomemsg></Welcomemsg> }

 <div className="input_item-container">
 <Items items={todoitems} ondeleteclick={handledeleteitem}></Items>
 </div>
 
 </center>
}
export default App