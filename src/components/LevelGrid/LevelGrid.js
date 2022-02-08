import './LevelGrid.css'
import { Component } from 'react';
import LevelGridItem from './LevelGridItem/LevelGridItem'

export default class LevelGrid extends Component {
	data = require('../../data/GameData.json');

	render() {
		let levels;
		levels =
			this.data.gameWords.map((level, index) => {
				const match = this.props.levelState.find(x => x.level === (index + 1).toString());
				const levelState = match && match.state ? match.state : '';
				return <LevelGridItem key={index.toString()} level={index + 1} levelState={levelState}></LevelGridItem>
			});
		return (
			<div id="levelGridContainer">
				<div id="levelGrid">
					{levels}
				</div>
			</div>
		);
	}
}