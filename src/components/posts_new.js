import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import './posts_new.css'

class PostsNew extends Component {

	rederField(field){
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;
		return (
				<div className={className}>
					<label>{field.label}</label>
					<input 
					className="form-control"
					type="text"
						{...field.input}
					/>
					<div className="text-help">
						{touched ? error : '' } 
					</div>
				</div>
			)
	}

	onSubmit(values) {
		console.log(values)
	}

	render() {
		const { handleSubmit } = this.props;

		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="Title For Post"
					name="title"
					component={this.rederField}
				/>
				<Field 
					label="Categories"
					name="categories"
					component={this.rederField}
				/>
				<Field
					label="Post Content"
					name="content"
					component= {this.rederField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
			)
	}
}

function validate(values) {
	const errors = {};

	// Validate the inputs from 'values'

	if (!values.title ) {
		errors.title = "Enter a title!";
	}
	if (!values.categories) {
		errors.categories = 'Enter Some categories please'
	}
	if (!values.content) {
		errors.content = 'Enter some content please'
	}

	// If errors is empty, the form is fine to submit
	// If errors has *aby* properties, redux form assume form is invalid
	return errors;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(PostsNew);