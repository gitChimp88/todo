import React from 'react'

export default class TodoItems extends React.Component {
	
	constructor(){
		super()
		//this.createTasks = this.createTasks.bind(this)
		//this.delete = this.delete.bind(this)
		
	}
	
	/*
	createTasks(item, i){
		return <li key = {i}>{item.text}</li>
	}*/
	
	//we can pass the mapping to a function or do it seperately
	/*if we pass it to a function we can bind it in the constructor as commented*/
	
     delete(key) {
		 this.props.delete(key)
	 }
	
	
	
	render() {
		
		var items = this.props.entry
		//var listItems = items.map(this.createTasks)
		
		var listItems = items.map((item, i)=>{
			return <div> <li >{item.text}</li><button onClick={() => this.delete(item.key)} key = {item.key}>delete</button></div>
		})
			
		return(
			<ul className="list">
				{listItems}
			</ul>
		)
	}
		
		
	
}