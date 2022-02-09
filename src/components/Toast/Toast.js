import './Toast.css';
import React from 'react';

const Toast = (props) => {
	return (
		<div className="toast" data-show={props.show}>
			{props.message}
		</div>
	);
}

export default Toast;