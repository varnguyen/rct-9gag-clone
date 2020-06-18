import React from 'react';
import { Container } from "reactstrap";
import "./servererror.scss";

const ServerError = () => {
	return (<div id="page-servererror" className="fadeIn animated faster" style={{ height: '100vh' }}>
		<Container>
			<img src="/assets/images/err500.jpg" alt="404" className="img-fluid" />
		</Container>
	</div>);
}

export default ServerError;