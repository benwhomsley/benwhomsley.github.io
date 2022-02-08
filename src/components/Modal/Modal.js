import './Modal.css';
import { useNavigate } from 'react-router-dom';

const Modal = (props) => {
	const navigate = useNavigate();
	const handleClick = () => navigate('/');

	const title = props.success ? <h1>Congratulations</h1> : <h1>Unlucky</h1>
	const message = props.success ? null : <p>The answer was: {props.word}</p>

	return (
		<div className="overlay" data-show={props.show}>
			<div className="content">
				<div className="close-icon">
					<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
						<path fill="#565758" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
					</svg>
				</div>
				{title}
				{message}
				<button className={`${props.success ? "success" : ""}`} onClick={handleClick}>Back to levels</button>
			</div>
		</div>
	);
}

export default Modal;

// <div class="container">
//     <h1>Statistics</h1>
//     <div id="statistics">
//   <div class="statistic-container">
//     <div class="statistic">1</div>
//     <div class="label">Played</div>
//   </div>

//   <div class="statistic-container">
//     <div class="statistic">100</div>
//     <div class="label">Win %</div>
//   </div>

//   <div class="statistic-container">
//     <div class="statistic">1</div>
//     <div class="label">Current Streak</div>
//   </div>

//   <div class="statistic-container">
//     <div class="statistic">1</div>
//     <div class="label">Max Streak</div>
//   </div>
// </div>
//     <h1>Guess Distribution</h1>
//     <div id="guess-distribution">
//     <div class="graph-container">
//       <div class="guess">1</div>
//       <div class="graph">
//         <div class="graph-bar" style="width: 7%;">
//           <div class="num-guesses">0</div>
//       </div>
//       </div>
//     </div>

//     <div class="graph-container">
//       <div class="guess">2</div>
//       <div class="graph">
//         <div class="graph-bar" style="width: 7%;">
//           <div class="num-guesses">0</div>
//       </div>
//       </div>
//     </div>

//     <div class="graph-container">
//       <div class="guess">3</div>
//       <div class="graph">
//         <div class="graph-bar" style="width: 7%;">
//           <div class="num-guesses">0</div>
//       </div>
//       </div>
//     </div>

//     <div class="graph-container">
//       <div class="guess">4</div>
//       <div class="graph">
//         <div class="graph-bar" style="width: 7%;">
//           <div class="num-guesses">0</div>
//       </div>
//       </div>
//     </div>

//     <div class="graph-container">
//       <div class="guess">5</div>
//       <div class="graph">
//         <div class="graph-bar align-right highlight" style="width: 100%;">
//           <div class="num-guesses">1</div>
//       </div>
//       </div>
//     </div>

//     <div class="graph-container">
//       <div class="guess">6</div>
//       <div class="graph">
//         <div class="graph-bar" style="width: 7%;">
//           <div class="num-guesses">0</div>
//       </div>
//       </div>
//     </div>
// </div>
//     <div class="footer">
//   <div class="countdown">
//     <h1>Next WORDLE</h1>
//     <div id="timer">
//       <div class="statistic-container">
//         <div class="statistic timer">
//           <countdown-timer></countdown-timer>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div class="share">
//     <button id="share-button">
//       Share <game-icon icon="share"></game-icon>
//     </button>
//   </div>
// </div>
//   </div>