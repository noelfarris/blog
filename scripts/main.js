'use strict';

Parse.initialize("AUPf1KJD34PVFz3JgkNzCUrnfPFyfqjve4mjM0e4", "bnAelwusvxhAEMjgDymNj5od3DxxDPo1KxwYTS9c");
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

var NavigationComponent = require('./components/navigationComponent');
var RegisterComponent = require('./components/registerComponent');
var LoginComponent = require('./components/loginComponent');
var HomeComponent = require('./components/homeComponent');
var AddPostComponent = require('./components/addPostComponent');
var ViewPostComponent = require('./components/viewPostComponent');
var app = document.getElementById('app');

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'register': 'register',
		'login': 'login',
		'register': 'register',
		'addPost': 'addPost',
		'viewPost': 'viewPost'
	},
	home: function() {
		ReactDOM.render(<HomeComponent />, app);
	},
	register: function() {
		ReactDOM.render(<RegisterComponent router={r} />, app);
	},
	login: function() {
		ReactDOM.render(<LoginComponent router={r} />, app);
	},
	addPost: function() {
		ReactDOM.render(<AddPostComponent router={r} />, app);
	},
	viewPost: function() {
		ReactDOM.render(<ViewPostComponent router={r} />, app);
	}
})

var r = new Router();
Backbone.history.start();
ReactDOM.render(<NavigationComponent router={r} />, document.getElementById('nav'));