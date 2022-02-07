import LevelGrid from "../../components/LevelGrid/LevelGrid";
import { useCookies } from 'react-cookie'

const Home = () => {
	const [cookies, setCookie] = useCookies(['levels']);
	let cookie = cookies.levels ? cookies.levels : [];
	console.log('cookies', cookies.levels)
	if (cookie.length === 0) {
		setCookie('levels', cookie);
	}


	return (
		<LevelGrid levelState={cookie} />
	);
}

export default Home;