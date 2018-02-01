import React from 'react'
import "./index.css";
import TodoItems from "./TodoItems"
import "./TodoList.css"

export default class App extends React.Component {
	
	constructor() {
		super()
		this.state = {
			items: []
		}
	}
	
	
	addItem(e) {
		debugger
		e.preventDefault();
		
		var arr = this.state.items
		
		if(this.refs.input.value !== "") {
			arr.push({text: this.refs.input.value,
					 key: Date.now()})
		
		
		  this.setState({items: arr})
	      this.refs.input.value = ""
		}
		console.log(arr)
    }
	
	deleteItem(key){
		var filter = this.state.items.filter((item)=>{
			return (item.key !== key)
		})
		
		this.setState({
			items: filter
		})
	}
	
   render(){
	   return(
			<div className='todoListMain' id="container">
			   <div className="header">
				   <form onSubmit={this.addItem.bind(this)}>
					   <input ref="input" placeholder="enter toDo"></input>
					   <button type="submit">+</button>
				   </form>
			   </div>
			   <TodoItems entry={this.state.items}
				   		  delete={this.deleteItem.bind(this)}
				   />
		   </div>
	   )
   }
} 

/*
Create a todo app according to the following requirements:

- it needs to have a input field. 
- it needs to have a submit button 
- you need to be able to submit pressing the button but also pressing enter 
- you need to be able to remove todo clicking on a trashcan icon or something as obvious
- the delete icon needs to be hidden until hovering on the todo.
- you need to be able to mark todos as done with a line through or something as obvious.
*/


