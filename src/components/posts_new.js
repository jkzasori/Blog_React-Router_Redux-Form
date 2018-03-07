import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
	rederTitleField(field){
		return (
				<div>
					<input 
					type="text"
						{...field.input}
					/>
				</div>
			)
	}
	render() {
		return(
			<form>
				<Field
					name="title"
					component={this.rederTitleField}
				/>
			</form>
			)
	}
}

export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);