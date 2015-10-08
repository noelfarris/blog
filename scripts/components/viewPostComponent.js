var React = require('react');
var PostModel = require('../models/postModel')

module.exports = React.createClass({

	getInitialState: function() {
	    return ({
	        posts: []

	    });
	},
	componentWillMount: function() {
	      var query = new Parse.Query(PostModel);
	      query.descending('createdAt');
	      query.find().then(
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
		var newPost = this.state.posts.map(function(post) {
		return (
				<div className='container'>
					<div className='row'>
					<h3>{post.get('title')}</h3>
					</div>
					<div className='row'>
					<img src={post.get('image')} />
					</div>
					<div className='row'>
					<p>{post.get('post')}</p>
					</div>
					<div className='row'>
					<div>{post.get('createdAt')}</div>
					</div>
				</div>

		);
		
		});
		return (
			{newPost}
			);
	}
});