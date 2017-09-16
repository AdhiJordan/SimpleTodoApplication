var React = require('react');

var Todo = require('Todo');
var TodoList = React.createClass ({
		render: function () {
			var {todos} = this.props;
			var renderFunction = () => {
				if(todos.length === 0) {
					return (
						<p className="container__message">Add some Tasks</p>
						);
				}
				return todos.map((todosample) => {
					return (<Todo key = {todosample.id} {...todosample} onToggle = {this.props.onToggle}/>);
				});
			}
			return (
				<div>
					{renderFunction()}
				</div>
				);
		}
});

module.exports = TodoList;