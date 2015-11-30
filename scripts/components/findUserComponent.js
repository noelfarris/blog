var React = require('react');
var PostModel = require('../models/postModel')

// Component allows users to click on the username link to see all posts from that user
module.exports = React.createClass({

	getInitialState: function() {
	    return ({
	        posts: []

	    });
	},
	// this parse query finds the user id of selected username and posts associated with user
	componentWillMount: function() {
	      var query = new Parse.Query(PostModel);
	      query.equalTo('user', new Parse.User({objectId: this.props.userId}));
	      query.find()
	      .then(
	      	(posts) => {
	      		console.log(posts);
	      		this.setState({posts: posts});
	      	},
	      	(err) => {
				console.log(err);
			}
	      	);
	},

	render: function() {
		var userPosts = this.state.posts.map(function(post) {
		return (
				<div className='container'>
					<div className='row'>
					<h3>{post.get('title')}</h3>
					</div>
					<div className='row'>
					<div>{post.get('category')} </div>
					</div>
					<div className='row'>
					<img src={post.get('image')} />
					</div>
					<div className='row'>
					<p>{post.get('post')}</p>
					</div>
					<div className='row'>
					<div>{post.get('createdAt').toString()}</div>
					</div>
				</div>

		)
	});
		
		return (
			<div className="container">
				{userPosts}
			</div>
		);
	}
	
});