import React, {Component} from 'react';

const INITIAL_STATE = {
	username: '',
	email: '',
	passwordOne: '',
	passwordTwo: '',
	error: null,
	};

class SignUpForm extends Component {
	constructor(props) {
		super(props);
		this.state={ ...INITIAL_STATE };
	}
	onSubmit = event => {
		const { username, email, passwordOne } = this.state;
		console.log(username, email, passwordOne);
		event.preventDefault();
	}

	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const {
			username,
			email,
			passwordOne,
		} = this.state;

		const isInvalid = 
		passwordOne === '' ||
		email === '' ||
		username === '';

		return (
			<form onSubmit={this.onSubmit}>
				<input
					name="username"
					value={username}
					onChange={this.onChange}
					type="text"
					placeholder="Full Name"
				/>
				<input
					name="email"
					value={email}
					onChange={this.onChange}
					type="text"
					placeholder="Email Address" 
				/>
				<input
					name="passwordOne"
					value={passwordOne}
					onChange={this.onChange}
					type="password"
					placeholder="Password"
				/>
				<button disabled={isInvalid} type="submit">
					sign in
				</button>
			</form>
		);
	}
}

export default SignUpForm;