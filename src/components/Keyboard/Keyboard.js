import React, { Component } from 'react';
import './Keyboard.css';
import KeyboardButton from './KeyboardButton/KeyboardButton'

export default class Keyboard extends Component {
	render() {
		return (
			<div id="keyboard">
				<div className="keyboardRow">
					<KeyboardButton keycode="q" buttonState={this.props.letters.correct.indexOf('q') !== -1 ? 'correct' : this.props.letters.present.indexOf('q') !== -1 ? 'present' : this.props.letters.absent.indexOf('q') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="w" buttonState={this.props.letters.correct.indexOf('w') !== -1 ? 'correct' : this.props.letters.present.indexOf('w') !== -1 ? 'present' : this.props.letters.absent.indexOf('w') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="e" buttonState={this.props.letters.correct.indexOf('e') !== -1 ? 'correct' : this.props.letters.present.indexOf('e') !== -1 ? 'present' : this.props.letters.absent.indexOf('e') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="r" buttonState={this.props.letters.correct.indexOf('r') !== -1 ? 'correct' : this.props.letters.present.indexOf('r') !== -1 ? 'present' : this.props.letters.absent.indexOf('r') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="t" buttonState={this.props.letters.correct.indexOf('t') !== -1 ? 'correct' : this.props.letters.present.indexOf('t') !== -1 ? 'present' : this.props.letters.absent.indexOf('t') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="y" buttonState={this.props.letters.correct.indexOf('y') !== -1 ? 'correct' : this.props.letters.present.indexOf('y') !== -1 ? 'present' : this.props.letters.absent.indexOf('y') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="u" buttonState={this.props.letters.correct.indexOf('u') !== -1 ? 'correct' : this.props.letters.present.indexOf('u') !== -1 ? 'present' : this.props.letters.absent.indexOf('u') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="i" buttonState={this.props.letters.correct.indexOf('i') !== -1 ? 'correct' : this.props.letters.present.indexOf('i') !== -1 ? 'present' : this.props.letters.absent.indexOf('i') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="o" buttonState={this.props.letters.correct.indexOf('o') !== -1 ? 'correct' : this.props.letters.present.indexOf('o') !== -1 ? 'present' : this.props.letters.absent.indexOf('o') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="p" buttonState={this.props.letters.correct.indexOf('p') !== -1 ? 'correct' : this.props.letters.present.indexOf('p') !== -1 ? 'present' : this.props.letters.absent.indexOf('p') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
				</div>
				<div className="keyboardRow">
					<div className="spacer half"></div>
					<KeyboardButton keycode="a" buttonState={this.props.letters.correct.indexOf('a') !== -1 ? 'correct' : this.props.letters.present.indexOf('a') !== -1 ? 'present' : this.props.letters.absent.indexOf('a') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="s" buttonState={this.props.letters.correct.indexOf('s') !== -1 ? 'correct' : this.props.letters.present.indexOf('s') !== -1 ? 'present' : this.props.letters.absent.indexOf('s') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="d" buttonState={this.props.letters.correct.indexOf('d') !== -1 ? 'correct' : this.props.letters.present.indexOf('d') !== -1 ? 'present' : this.props.letters.absent.indexOf('d') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="f" buttonState={this.props.letters.correct.indexOf('f') !== -1 ? 'correct' : this.props.letters.present.indexOf('f') !== -1 ? 'present' : this.props.letters.absent.indexOf('f') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="g" buttonState={this.props.letters.correct.indexOf('g') !== -1 ? 'correct' : this.props.letters.present.indexOf('g') !== -1 ? 'present' : this.props.letters.absent.indexOf('g') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="h" buttonState={this.props.letters.correct.indexOf('h') !== -1 ? 'correct' : this.props.letters.present.indexOf('h') !== -1 ? 'present' : this.props.letters.absent.indexOf('h') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="j" buttonState={this.props.letters.correct.indexOf('j') !== -1 ? 'correct' : this.props.letters.present.indexOf('j') !== -1 ? 'present' : this.props.letters.absent.indexOf('j') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="k" buttonState={this.props.letters.correct.indexOf('k') !== -1 ? 'correct' : this.props.letters.present.indexOf('k') !== -1 ? 'present' : this.props.letters.absent.indexOf('k') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="l" buttonState={this.props.letters.correct.indexOf('l') !== -1 ? 'correct' : this.props.letters.present.indexOf('l') !== -1 ? 'present' : this.props.letters.absent.indexOf('l') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<div className="spacer half"></div>
				</div>
				<div className="keyboardRow">
					<KeyboardButton keycode="enter" buttonState={this.props.letters.correct.indexOf('enter') !== -1 ? 'correct' : this.props.letters.present.indexOf('enter') !== -1 ? 'present' : this.props.letters.absent.indexOf('enter') !== -1 ? 'absent' : ''} clicked={this.props.clicked} class="one-and-a-half"></KeyboardButton>
					<KeyboardButton keycode="z" buttonState={this.props.letters.correct.indexOf('z') !== -1 ? 'correct' : this.props.letters.present.indexOf('z') !== -1 ? 'present' : this.props.letters.absent.indexOf('z') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="x" buttonState={this.props.letters.correct.indexOf('x') !== -1 ? 'correct' : this.props.letters.present.indexOf('x') !== -1 ? 'present' : this.props.letters.absent.indexOf('x') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="c" buttonState={this.props.letters.correct.indexOf('c') !== -1 ? 'correct' : this.props.letters.present.indexOf('c') !== -1 ? 'present' : this.props.letters.absent.indexOf('c') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="v" buttonState={this.props.letters.correct.indexOf('v') !== -1 ? 'correct' : this.props.letters.present.indexOf('v') !== -1 ? 'present' : this.props.letters.absent.indexOf('v') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="b" buttonState={this.props.letters.correct.indexOf('b') !== -1 ? 'correct' : this.props.letters.present.indexOf('b') !== -1 ? 'present' : this.props.letters.absent.indexOf('b') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="n" buttonState={this.props.letters.correct.indexOf('n') !== -1 ? 'correct' : this.props.letters.present.indexOf('n') !== -1 ? 'present' : this.props.letters.absent.indexOf('n') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="m" buttonState={this.props.letters.correct.indexOf('m') !== -1 ? 'correct' : this.props.letters.present.indexOf('m') !== -1 ? 'present' : this.props.letters.absent.indexOf('m') !== -1 ? 'absent' : ''} clicked={this.props.clicked}></KeyboardButton>
					<KeyboardButton keycode="←" buttonState={this.props.letters.correct.indexOf('←') !== -1 ? 'correct' : this.props.letters.present.indexOf('←') !== -1 ? 'present' : this.props.letters.absent.indexOf('←') !== -1 ? 'absent' : ''} clicked={this.props.clicked} class="one-and-a-half"></KeyboardButton>
				</div>
			</div>
		);
	}
}




