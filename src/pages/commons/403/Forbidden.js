import React from 'react';
import "./forbidden.scss";

const Forbidden = () => {
	return (<div id="page-forbidden" className="fadeIn animated faster" style={{ height: '100vh' }}>
		<div className="text-center">
			<img src="/assets/images/err403.jpg" alt="403" className="img-fluid" />
			<br />
			<br />
			<a href="/" className="btn btn-info" rel="noopener noreferrer">Back to home</a>
		</div>
	</div>);
}

export default Forbidden;