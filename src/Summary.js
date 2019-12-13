import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Container, Card, CardGroup, Jumbotron, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Summary({
	payTime,
	gigaValue,
	months,
	subTotal,
	last,
	first,
	email,
	address,
	expirationMonth,
	expirationYear,
	cvv,
	cardNumber
}) {
	const [ disabled, setDisabled ] = useState(1);

	const submitPurchase = () => {
		axios
			.post('https://httpbin.org/post', {
				payTime: payTime,
				gigaValue: gigaValue,
				months: months,
				subTotal: subTotal,
				last: last,
				first: first,
				email: email,
				address: address,
				expirationMonth: expirationMonth,
				expirationYear: expirationYear,
				cvv: cvv,
				cardNumber: cardNumber
			})
			.then(
				(response) => {
					console.log('POST Successful!');
					location.replace('/thankyou');
				},
				(error) => {
					console.log(error);
				}
			);
	};

	const switchDisabled = () => {
		if (disabled) {
			setDisabled(0);
		} else {
			setDisabled(1);
		}
	};

	useEffect(() => {
		if (
			payTime === '' ||
			gigaValue === '' ||
			months === '' ||
			subTotal === '' ||
			last === '' ||
			first === '' ||
			email === '' ||
			address === '' ||
			expirationMonth === '' ||
			expirationYear === '' ||
			cvv === '' ||
			cardNumber === ''
		) {
			location.replace('/');
		}
	}, []);

	return (
		<React.Fragment>
			<Container className="bg-white rounded-lg shadow-lg p-5 mt-4">
				<Jumbotron fluid>
					<Container className="text-center">
						<h1>Order Summary</h1>
						<p>If you need to modify something, you can still change it by clicking "Back" button</p>
					</Container>
				</Jumbotron>
				<Row>
					<Col />
					<Col sm={10}>
						<CardGroup>
							<Card>
								<Card.Img variant="top" />
								<Card.Body>
									<Card.Title>Billed To:</Card.Title>
									<Card.Text>
										{last}, {first}
									</Card.Text>
									<Card.Text>{address}</Card.Text>
								</Card.Body>
							</Card>
							<Card>
								<Card.Img variant="top" />
								<Card.Body>
									<Card.Title>Payment Method</Card.Title>
									<Card.Text>
										<strong>CC ending</strong> **** **** **** {cardNumber.slice(12, 16)}
									</Card.Text>
									<Card.Text>
										<strong>Expiring date: </strong>
										{expirationMonth} / {expirationYear}
									</Card.Text>
									<Card.Text>{email}</Card.Text>
								</Card.Body>
							</Card>
							<Card>
								<Card.Img variant="top" />
								<Card.Body>
									<Card.Title>Order Summary</Card.Title>
									<Card.Text>
										<strong>Plan</strong> {months} months.
									</Card.Text>
									<Card.Text>
										<strong>You pay </strong>
										{payTime}
										.
									</Card.Text>

									<Card.Text>
										<strong>Storage capacity of</strong> {gigaValue}GB
									</Card.Text>

									<Card.Text>
										<strong>Amount to pay {payTime}:</strong> €{subTotal}
									</Card.Text>
								</Card.Body>
							</Card>
						</CardGroup>
					</Col>
					<Col />
				</Row>
				<Row className="mt-4">
					<Col />
					<Col sm={6}>
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check
								type="checkbox"
								label="I accept the Terms and Conditions of this Service"
								onClick={() => switchDisabled()}
							/>
						</Form.Group>
					</Col>
					<Col />
				</Row>
				<Row className="mt-4">
					<Col />
					<Col xs={3}>
						<Link className="noUnderline" to="/third">
							<Button variant="secondary" size="lg">
								Back
							</Button>
						</Link>
					</Col>
					<Col xs={3}>
						<Button disabled={disabled} variant="success" size="lg" onClick={() => submitPurchase()}>
							Purchase
						</Button>
					</Col>
					<Col />
				</Row>
			</Container>
		</React.Fragment>
	);
}
