var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});
	it('should call onAddTodo prop with valid data', () => {
		var todoInput = 'check mail';
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.addTodosInput.value = todoInput;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(todoInput);
	});

		it('should call onAddTodo prop with invalid data', () => {
		var todoInput = '';
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.addTodosInput.value = todoInput;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
});