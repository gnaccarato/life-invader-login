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
				<div style={{
					width: '400px',
					margin: 'auto',					
					padding: '20px'
				}}>
				<img src={this.state.picture} alt={this.state.name} />
				<h2>Greetings {this.state.name} </h2>
				Email: {this.state.email}
				</div>
				
			)

		} else {
			fbContent = (
				<FacebookLogin
				    appId="1122196307958978"
				    autoLoad={true}
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