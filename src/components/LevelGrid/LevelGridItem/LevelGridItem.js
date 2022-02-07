import './LevelGridItem.css'
import { useNavigate } from 'react-router-dom';

const LevelGridItem = (props) => {
	const navigate = useNavigate();
	const handleClick = () => navigate('/level/' + props.level);

	return (
		<div className="levelGridItem" data-complete={props.complete} onClick={handleClick}>{props.level}</div>
	);
};

export default LevelGridItem;
