import { useState } from "react";

function Apptodo ({onnewitem}){
  let [todoname,settodoname] =useState();
  let [tododate,settododate] =useState();
  let Handleonnamechange=(event)=>{
      settodoname(event.target.value)
  }
  let Handleondatechange=(event)=>{
    settododate(event.target.value)
}
let handleAddbuttonclicked =()=>{
  onnewitem(todoname,tododate)
  settododate("") 
  settodoname("")
  
}
  
   return  <div class="container text-center">
   <div class="row kg-row">
     <div class="col-6">
       <input type="text" placeholder="Enter todo here" value={todoname} onChange={Handleonnamechange}></input>
     </div>
     <div class="col-4">
       <input type="date" value={tododate} onChange={Handleondatechange}></input>
     </div>
     <div class="col-2">
     <button type="button" class="btn btn-success kg-button" onClick={handleAddbuttonclicked}>Add</button>
     </div>
   </div>
   </div>
}
export default Apptodo;