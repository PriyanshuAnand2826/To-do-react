import Appname from "./components/Appname"
import Apptodo from "./components/Apptodo"
import Todoitem from "./components/Todoitem"
import "./App.css" 
import Items from "./components/Items"

function App (){
  let todoitems=[{
    name:"Buy milk",
    duedate:"04/25/2024"
  },{
    name:"Go to college",
    duedate:"04/12/2024"
  },
  {
    name:"Eat chocolate ",
    duedate:"26/12/2024"
  }
]
 return <center class='to-do-container'>
  <Appname></Appname>
 <Apptodo></Apptodo>

 <div className="input_item-container">
 <Items items={todoitems}></Items>
 </div>
 
 </center>
}
export default App