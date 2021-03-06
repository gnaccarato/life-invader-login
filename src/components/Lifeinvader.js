import React from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Lifeinvader extends React.Component {
	state = {
		isLoggedIn: false,
		userID: '',
		name: '',
		email: '',
		picture: ''
	}

	responseFacebook = response => {		
		this.setState({
		isLoggedIn: true,
		userID: response.userID,
		name: response.name,
		email: response.email,
		picture: response.picture.data.url
		})		
	}

	componentClicked = () => {
		console.log('clicked');
	}

	render() {
		let fbContent;

		if (this.state.isLoggedIn) {
			fbContent = (
				<div className="fb_style">
					<img src={this.state.picture} alt={this.state.name} />
					<h2>Hello {this.state.name} </h2>
					<h3>Email: {this.state.email}</h3>
				</div>
				
			)

		} else {
			fbContent = (
				<FacebookLogin
				    appId="1122196307958978"
				    autoLoad={false}
				    fields="name,email,picture"
				    onClick={this.componentClicked}
				    callback={this.responseFacebook}
				/>
			);
		}

		return (
			<div>
				{fbContent}
			</div>
		)
	}
}