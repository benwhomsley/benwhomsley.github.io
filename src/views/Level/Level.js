import './Level.css';
import { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Modal from '../../components/Modal/Modal'
import GameController from '../../controllers/GameController/GameController'

const Level = () => {
	const params = useParams();
	const [showModal, setShowModal] = useState(false);
	const [modalSuccess, setModalSuccess] = useState(false);
	const [correctWord, setCorrectWord] = useState('');
	const [cookies, setCookie] = useCookies(['levels']);

	function gameComplete(data, win, word) {
		let cookie = cookies.levels ? cookies.levels : [];
		let addCookie = true;
		if (cookie.find(x => x.level === data[0].level)) {
			addCookie = false;
		}
		if (addCookie) {
			cookie = [...cookie, ...data];
			setCookie('levels', cookie);
		}

		setTimeout(() => {
			setShowModal(true);
			setCorrectWord(word);
			if (win) {
				setModalSuccess(true);
			} else {
				setModalSuccess(false);
			}
		}, 2000);
	}

	return (
		<Fragment>
			<Modal show={showModal} success={modalSuccess} word={correctWord}></Modal>
			<GameController rows="6" letters="5" level={params.levelId} gameComplete={gameComplete}></GameController>
		</Fragment>
	);
}

export default Level;