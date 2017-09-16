var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
	it('should exist', () => {
		expect(TodoSearch).toExist();
	});

	it('show call onsearch and while get proper text value', () => {
		var searchText = 'Dog';
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
		todoSearch.refs.searchText.value = searchText;
		TestUtils.Simulate.change(todoSearch.refs.searchText);

		expect(spy).toHaveBeenCalledWith(false, 'Dog');
	});
	it('show call onsearch and while get proper checked value', () => {
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
		todoSearch.refs.showChecked.checked = true;
		TestUtils.Simulate.change(todoSearch.refs.showChecked);

		expect(spy).toHaveBeenCalledWith(true, '');
	});
});