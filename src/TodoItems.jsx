import React from 'react'

export default class TodoItems extends React.Component {
	
	constructor(){
		super()
		
		this.state = {
			cross: false
		}
	}
	
	
     delete(key) {
		 this.props.delete(key)
	 }
	
	line(key) {
		var st = this.state.cross;
		this.setState({cross: !st})
		this.props.line(key)
	}
	
	render() {
		
		var items = this.props.entry
	
		let style = {
			textDecoration: 'line-through'
		}
		
		var listItems = items.map((item, i)=>{
			 if(item.line == true){
				 return <div> <button onClick={() => this.line(item.key)} key = {item.key}>Done</button><li style={style}>{item.text}  <button onClick={() => this.delete(item.key)} key = {item.key}>X</button></li></div>
			 }
			return <div><button onClick={() => this.line(item.key)} key = {item.key}>Done</button> <li>{item.text}<button onClick={() => this.delete(item.key)} key = {item.key}>X</button></li></div>
			
		})
			
		return(
			<ul className="list">
				{listItems}
			</ul>
		)
	}
		
		
	
}