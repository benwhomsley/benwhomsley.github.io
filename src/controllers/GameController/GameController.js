import React, { Component, Fragment } from 'react';
import Tile from '../../components/tiles/Tile/Tile'
import Keyboard from '../../components/Keyboard/Keyboard'


export default class GameController extends Component {
	state = {
		rows: [],
		word: '',
		letters: {
			correct: [],
			present: [],
			absent: []
		},
		width: 0,
		height: 0
	};

	data = require('../../data/GameData.json');

	rowIndex = 0;
	letterIndex = 0;

	maxRows = parseInt(this.props.rows);
	maxLetters = parseInt(this.props.letters);


	updateDimensions = () => {
		let height = window.innerHeight - 250;
		this.setState({ width: height * 0.8333333333, height: height });
	};

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener('resize', this.updateDimensions);
		// Log word out for testing
		console.log(this.data.gameWords[this.props.level - 1])

		this.setState({ word: this.data.gameWords[this.props.level - 1] });
		for (let row = 0; row < this.props.rows; row++) {
			const rows = this.state.rows;
			rows.push({ animation: '', letters: [] });
			this.setState({ rows: rows });
			for (let letter = 0; letter < this.props.letters; letter++) {
				const rows = this.state.rows;
				rows[row].letters.push({ state: 'tbd', letter: '' });
				this.setState({ rows: rows })
			}
		}

		document.addEventListener('keydown', (event) => {
			this.buttonPressed(event.key, event.keyCode);
		});
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this, false);
		window.removeEventListener('resize', this.updateDimensions);
	}

	buttonPressed(key, keycode) {
		if ((keycode && keycode === 8) || key === '←') {
			this.deleteLetter();
		} else if ((keycode && keycode === 13) || key === 'enter') {
			this.submitGuess();
		} else if (key.match(/^[A-Za-z]{1}$/g)) {
			this.addLetter(key);
		}
	}

	addLetter(letter) {
		if (this.letterIndex < this.maxLetters) {
			const rows = this.state.rows;
			rows[this.rowIndex].letters[this.letterIndex].letter = letter;
			this.setState({ rows: rows })
			this.letterIndex++;
		}
	}

	deleteLetter() {
		if (this.letterIndex > 0) {
			const rows = this.state.rows;
			rows[this.rowIndex].letters[this.letterIndex - 1].letter = '';
			this.setState({ rows: rows })
			this.letterIndex--;
		}
	}

	submitGuess() {
		if (this.letterIndex === this.maxLetters) {
			if (this.rowIndex < this.maxRows - 1) {
				if (!this.data.acceptedWords.includes(this.getWord()) && !this.data.gameWords.includes(this.getWord())) {
					const rows = this.state.rows;
					rows[this.rowIndex].animation = 'shake';
					this.setState({ rows: rows })
					setTimeout(() => {
						rows[this.rowIndex].animation = null;
						this.setState({ rows: rows })
					}, 200);
					return
				}

				this.addRevealAnimation();

				if (this.getWord() == this.state.word) {
					// Guess is correct
					this.addJumpAnimation();
					const guesses = this.getGuesses();
					this.props.setCookie([{
						level: this.props.level,
						guesses,
						state: 'complete'
					}]);
				} else {
					this.rowIndex++
					this.letterIndex = 0;
				}

			} else {
				// Last guess
			}
		}
	}

	addRevealAnimation() {
		const rows = [...this.state.rows];
		const letters = { ...this.state.letters };
		const rowIndexLocal = this.rowIndex;
		for (let index = 0; index < this.maxLetters; index++) {
			let letter = rows[rowIndexLocal].letters[index].letter.toLowerCase();
			if (letter === this.state.word[index]) {
				setTimeout(() => { rows[rowIndexLocal].letters[index].state = 'correct'; this.setState({ rows: rows }); }, (index * 80) + 400)
				if (letters.correct.indexOf(letter)) {
					letters.correct.push(letter)
				}
			} else if (this.state.word.indexOf(rows[rowIndexLocal].letters[index].letter.toLowerCase()) > -1) {
				setTimeout(() => { rows[rowIndexLocal].letters[index].state = 'present'; this.setState({ rows: rows }); }, (index * 80) + 400)
				if (letters.present.indexOf(letter)) {
					letters.present.push(letter)
				}
			} else {
				setTimeout(() => { rows[rowIndexLocal].letters[index].state = 'absent'; this.setState({ rows: rows }); }, (index * 80) + 400)
				if (letters.absent.indexOf(letter)) {
					letters.absent.push(letter)
				}
			}
			setTimeout(() => {
				rows[rowIndexLocal].letters[index].animation = 'reveal';
				this.setState({ rows: rows });
			}, (index * 80))
		}

		setTimeout(() => {
			this.setState({ letters })
		}, 2000);
	}

	addJumpAnimation() {
		const rows = this.state.rows;
		const rowIndexLocal = this.rowIndex;
		setTimeout(() => {
			for (let index = 0; index < this.maxLetters; index++) {
				setTimeout(() => {
					rows[rowIndexLocal].letters[index].animation = 'jump';
					this.setState({ rows: rows });
				}, (index * 80));
			}
		}, 1000)
	}

	getWord(rIndex) {
		const rowIndex = rIndex ? rIndex : this.rowIndex;
		let word = '';
		for (let index = 0; index < this.maxLetters; index++) {
			word = word + this.state.rows[rowIndex].letters[index].letter;
		}
		return word.toLowerCase();
	}

	getGuesses() {
		let guesses = [];
		console.log()
		for (this.rowIndex + 1; this.rowIndex > 0; this.rowIndex--) {
			guesses.push(this.getWord(this.rowIndex));
		}
		return guesses;
	}

	render() {
		let rows;
		if (typeof this.state.rows === 'object') {
			rows =
				this.state.rows.map((row, index1) => {
					return <div key={index1} className='row' data-animation={row.animation ? row.animation : null}>
						{this.state.rows[index1].letters.map((letter, index2) => {
							return <Tile key={index1.toString() + index2.toString()} state={letter.state} letter={letter.letter} animation={letter.animation}></Tile>
						})}
					</div>
				})
		} else {
			rows = null
		}
		return (
			<Fragment>
				<div id='boardContainer'>
					<div id="board" style={{ width: this.state.width + 'px' }}>
						{rows}
					</div>
				</div>
				<Keyboard clicked={this.buttonPressed.bind(this)} letters={this.state.letters}></Keyboard>
			</Fragment>
		);
	}
}