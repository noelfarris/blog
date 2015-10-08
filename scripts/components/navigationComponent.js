var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	componentWillMount: function() {
		this.props.router.on('route', () => {
			this.forceUpdate();
		});
	},
	render: function() {
		var currentPage = Backbone.history.getFragment();

		var links = [
			<li key="home" className={currentPage === '' ? 'active' : ''}><a href="#home">Home</a></li>,
		];

		if(Parse.User.current()) {
			links.push(<li key="addPost" className={currentPage === 'addPost' 	? 'active' : ''}><a href="#addPost">Add Post</a></li>);
			links.push(<li key="logout"><a href="#logout" onClick={this.onLogout}>Logout</a></li>);
			links.push(<li key="viewPost" className={currentPage === 'viewPost'	? 'active' : ''}><a href="#viewPost">View Post</a></li>);
		}
		else {
			links.push(<li key="login" className={currentPage === 'login' 		? 'active' : ''}><a href="#login">Login</a></li>);
			links.push(<li key="register" className={currentPage === 'register' 	? 'active' : ''}><a href="#register">Register</a></li>);
		}


		return (
			<div className="nav-wrapper">
				<a href="#" className="brand-logo left">Log Blog</a>
				<ul id="nav-mobile" className="right">
					{links}
				</ul>
			</div>
		);
	},
	onLogout: function(e) {
		e.preventDefault();
		Parse.User.logOut();
		this.props.router.navigate('', {trigger: true});
	}
})