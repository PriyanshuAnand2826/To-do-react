import React from 'react'
import Todoitem from './Todoitem';
function Items({items}){
 return (
  <>
   {items.map(item=>( <Todoitem tododata={item.name} tododate={item.duedate} ></Todoitem>))}
   
  </>
 ) 
}
export default Items;