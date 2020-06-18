import React from 'react';
import "./unauthorized.scss";

const Unauthorized = () => {
	return (<div id="page-unauthorized" className="fadeIn animated faster" style={{ height: '100vh' }}>
		<div className="text-center">
			<img src="/assets/images/401.png" alt="401" className="img-fluid" />
			<br />
			<br />
			<a href="/" className="btn btn-info" rel="noopener noreferrer">Back to login</a>
		</div>
	</div>);
}

export default Unauthorized;