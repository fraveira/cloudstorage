import React from 'react';
import { Col, Row, Button, Container, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ThankYou() {
	return (
		<React.Fragment>
			<Container>
				<Row>
					<Col />
					<Col md={6}>
						<Jumbotron bg="primary" className=" shadow-lg p-5 mt-4">
							<h2>Thank you for your purchase!</h2>
							<p>
								Shortly we will send you a message to the provided e-mail address with more information
								about your purchase. Stay tuned!
							</p>
							<Link to="/">
								<Button variant="warning">Back to Homepage</Button>
							</Link>
						</Jumbotron>
					</Col>
					<Col />
				</Row>
			</Container>
		</React.Fragment>
	);
}
