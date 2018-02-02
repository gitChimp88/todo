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
		e.preventDefault();
		
		var arr = this.state.items
		
		if(this.refs.input.value !== "") {
			arr.push({text: this.refs.input.value,
					 key: Date.now(),
					 line: false})
		
		
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
	
	lineThrough(key){
		this.state.items.map((val)=>{
			if(val.key == key) {
				if(val.line == false){
					val.line = true
				} else {
					val.line = false
				}
			}
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
						 line = {this.lineThrough.bind(this)}
				   />
		   </div>
	   )
   }
} 



