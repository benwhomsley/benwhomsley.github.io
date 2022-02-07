import React, { Component } from 'react';
import './KeyboardButton.css';

export default class KeyboardButton extends Component {
	render() {
		return (
			<button
				data-key={this.props.keycode}
				onClick={this.props.clicked.bind(this, this.props.keycode)}
				data-state={this.props.buttonState}
				className={this.props.class}>{this.props.keycode}</button>
		);
	}
}