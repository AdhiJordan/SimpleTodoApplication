var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
	it('should exist', () => {
		expect(TodoApp).toExist();
	});

	it('should add todo to todos state on handleAdd', () => {
		var todoText = 'test text';
		var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

		todoApp.setState({todos: []});
		todoApp.handleAdd(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
	
	});
	it('should toggle completed value when toggle changed',() => {
		var todoData = {
			id: 12,
			text: 'how is it',
			completed: false
		};
		var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
		todoApp.setState({todos: [todoData]});

		expect(todoData.state.todos[0].completed).toBe(false);
		todoApp.handleToggle(11);
		expect(todoData.state.todos[0].completed).toBe(true);
	});

});