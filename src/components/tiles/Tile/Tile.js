import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component {
	render() {
		return (
			<div className='tile' data-state={this.props.state} data-animation={this.props.animation ? this.props.animation : null}>{this.props.letter}</div>
		);
	}
}

export default Tile;