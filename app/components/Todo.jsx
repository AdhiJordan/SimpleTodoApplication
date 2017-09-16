var React = require('react');

var moment = require('moment');
var Todo = React.createClass ({
		render: function () {
			var {id,text, completed, createdAt, completedAt} = this.props;
			var todoClassName = completed ? 'todo todo-completed': 'todo';
			var renderDate = () => {
				var message = 'created';
				var timestamp = createdAt;
				if(completed) {
					message = 'completed';
					timestamp = completedAt;
				}
				return message + moment.unix(timestamp).format('MMMM Do YYYY @ h:mm a');
			}
			return (
				<div onClick={() => {
					this.props.onToggle(id);
				}}>
					<div>
					<input id="checkbox1" type="checkbox"
					checked={completed} />
					</div>
					<label for="checkbox1">Show  Completed</label>
					<div>
					<p>{text}</p>
					<p className="todo__subtext">{renderDate()}</p>
					</div>
				</div>
				);
		}
});

module.exports = Todo;