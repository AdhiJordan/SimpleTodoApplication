var React = require('react');

var moment = require('moment');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');
var TodoAPI = require('TodoAPI');


var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			show: false,
			textValue: '',
			todos: TodoAPI.getTodos()
		};
	},
	componentDidUpdate: function() {
		TodoAPI.setTodos(this.state.todos);
	},
	handleAdd: function(text) {
		this.setState({
			todos: [
					...this.state.todos,
					{
						id: uuid(),
						text: text,
						completed: false,
						createdAt: moment().unix(),
						completedAt: undefined
					}
			]
		});
	},
	handleSearch: function(show, textValue) {
		
		this.setState({
			show: show,
			textValue: textValue.toLowerCase()
		});
	},
	handleToggle: function(id) {
		var updatedTodos = this.state.todos.map((todo) => {
			if(todo.id === id) {
				todo.completed = !todo.completed;
				todo.completedAt = todo.completed ? moment().unix() : undefined;
			}
			return todo;
			
			});
		this.setState({todos: updatedTodos});
	},
	render: function () {
		var {todos, show, textValue} = this.state;
		var filteredTodos = TodoAPI.filterSearch(todos, show, textValue);

		return (
			<div>
			<h1 className="page-title">Todo Application</h1>
			<div className="row">
				<div className="column small-centered small-11 medium-6 large-5">
					<div className="container">
						<TodoSearch onSearch = {this.handleSearch}/>
						<TodoList todos = {filteredTodos} onToggle={this.handleToggle}/>
						<AddTodo onAddTodo = {this.handleAdd} />
					</div>
				</div>
			</div>
				
			</div>

			);
	}

});

module.exports = TodoApp;