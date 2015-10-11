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
	      query.include('user');
	      query.descending('createdAt')
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

		var allPosts = this.state.posts.map(function(post) {
			var currentUser = post.get('user');
		return (
				<div className="row">
        <div className="col s12 m10">
          <div className="card large">
            <div className="card-image">
              <img src={post.get('image')} />
              <a href={'#viewPost/details/'+post.id}><span className="card-title">{post.get('title')}</span></a>
            </div>
            <div className="card-content">
              <p>{post.get('post').substring(0, 140)}...</p>
            </div>
            <div className="card-action">
              <a href={"#findUserPost/" + currentUser.id}>Posted by: {post.get('user').get('firstName')} {post.get('user').get('lastName')}</a>
              <a href="#">Category: {post.get('category')}</a>
            </div>
          </div>
        </div>
      </div>

		);
		
		});
		return (
			<div>
			{allPosts}
			</div>
			);
	}
});