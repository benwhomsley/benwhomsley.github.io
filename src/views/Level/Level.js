import './Level.css';
import { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Modal from '../../components/Modal/Modal'
import GameController from '../../controllers/GameController/GameController'

const Level = () => {
	const params = useParams();
	const [showModal, setshowModal] = useState(false);
	const [cookies, setCookie] = useCookies(['levels']);

	function gameComplete(data) {
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
			setshowModal(true);
		}, 2000);
	}

	return (
		<Fragment>
			<Modal show={showModal}></Modal>
			<GameController rows="6" letters="5" level={params.levelId} setCookie={gameComplete}></GameController>
		</Fragment>
	);
}

export default Level;