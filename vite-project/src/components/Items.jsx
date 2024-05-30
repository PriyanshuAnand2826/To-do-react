import React from 'react'
import Todoitem from './Todoitem';
function Items({items , ondeleteclick}){
 return (
  <>
   {items.map(item=>( <Todoitem  key={item.name}  tododata={item.name} tododate={item.duedate} ondeleteclick1 ={ondeleteclick} ></Todoitem>))}
   
  </>
 ) 
}
export default Items;