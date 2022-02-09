import './Level.css';
import { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Modal from '../../components/Modal/Modal';
import Toast from '../../components/Toast/Toast';
import GameController from '../../controllers/GameController/GameController';

const Level = () => {
	const params = useParams();
	const [showToast, setShowToast] = useState(false);
	const [toastMessage, setToastMessage] = useState('');
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

	function handleShowToast(message) {
		setShowToast(true);
		setToastMessage(message);
		setTimeout(() => {
			setShowToast(false);
		}, 2000);
	}

	return (
		<Fragment>
			<Toast show={showToast} message={toastMessage}></Toast>
			<Modal show={showModal} success={modalSuccess} word={correctWord} level={params.levelId}></Modal>
			<GameController rows="6" letters="5" level={params.levelId} gameComplete={gameComplete} showToast={handleShowToast}></GameController>
		</Fragment>
	);
}

export default Level;