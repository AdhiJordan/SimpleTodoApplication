var $ = require('jquery');
module.exports = {
	setTodos: function (todos) {
		if($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},
	getTodos: function () {
		var stringTodos = localStorage.getItem('todos');
		var todos = [];

		try {
			todos = JSON.parse(stringTodos);
		} catch (e) {

		}

		return $.isArray(todos) ? todos : [];
},
		filterSearch: function (todos, show, textValue) {
			var filterUpdate = todos;

			//filter by show
			filterUpdate = filterUpdate.filter((todo) => {
				return !todo.completed || show;
			});

			filterUpdate.sort((a,b) => {
				if(a.completed === false && b.completed)
				return -1;
			else if(a.completed && !b.completed) {
				return 1;

			}
			else {
				return 0;
			}
			});

			filterUpdate = filterUpdate.filter((todo) => {
				var text = todo.text.toLowerCase();
				return textValue.length === 0 || text.indexOf(textValue) > -1;
			});
			
			return filterUpdate;
		}
		// if($.isArray(todos)) {
		// 	return todos

		// }
		// else {
		// 	return [];
		// }
	}
