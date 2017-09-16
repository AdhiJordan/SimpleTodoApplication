var React = require('react');
 var AddTodo = React.createClass ({
 	handleSubmit: function (e) {
 		e.preventDefault();
 		var todoInput = this.refs.addTodosInput.value;

 		if(todoInput.length > 0) {
 			this.refs.addTodosInput.value = '';
			this.props.onAddTodo(todoInput);
 		}
 		else {
 			this.refs.addTodosInput.focus();
 		}
 		
 	},
 	render: function () {
 		return (
 			

 				<div className="container__footer">
 				<form onSubmit={this.handleSubmit}>
 					
 					<input type="text" 
 					placeholder="enter todo here"
 					ref="addTodosInput" />
 					
 					<button type="submit" className="success button">
 					Save It
 					</button>
 					
 				</form>
 				</div>
 			

 			);
 	}
 });

 module.exports = AddTodo;