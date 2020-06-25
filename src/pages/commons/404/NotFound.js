import React from 'react';
import "./notfound.scss";

const NotFound = () => {
	return (<div id="page-notfound" className="fadeIn animated faster" style={{ height: '100vh' }}>
		<div className="text-center">
			<img src="/assets/images/not-found.gif" alt="404" className="img-fluid" />
			<br />
			<br />
			<div className="error-msg ">
				<h1>OOPS!</h1>
			</div>
			<p className="error-msg">Please check that the URL you entered is correct. Please click the button below to return to the homepage or send an error report.</p>
			<a href="/" className="btn btn-info" rel="noopener noreferrer">Back to home</a>
		</div>
	</div>);
}

export default NotFound;