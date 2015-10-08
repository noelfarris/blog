var React = require('react');
var PostModel = require('../models/postModel')

module.exports = React.createClass({
	getInitialState: function() {
		return { error: null };
	},
	render: function() {
		var errorElement = null;
		if(this.state.error) {
			errorElement = (
				<p className="red">{this.state.error}</p>
			);
		}
		return (
			<div className="container">
				<div className="row">
					<form className="col s12" onSubmit={this.onAddPost}>
						<h1>Add Post</h1>
						{errorElement}
						<div className="row">
							<div className="input-field col s12">
								<input type="text" ref="title" className="validate" />
								<label>Title</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input type="text" ref="image" className="validate" />
								<label>Image URL</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<textarea id="textarea1" ref="post" className="materialize-textarea"></textarea>
								<label>Post</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input type="text" ref="category" className="validate" />
								<label>Category</label>
							</div>
						</div>
						<div className="row">
							<button className="waves-effect waves-light btn">Add Post</button>
						</div>
					</form>
				</div>
			</div>
		);
	},
	onAddPost: function(e) {
		e.preventDefault();
		var newPost = new PostModel({
			title: this.refs.title.value,
			image: this.refs.image.value,
			post: this.refs.post.value,
			category: parseInt(this.refs.category.value),
			user: Parse.User.current(),
		});
		newPost.save();
	}
});