import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Form, Container, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CardData({ getCard }) {
	const [ expirationMonth, setExpirationMonth ] = useState('');
	const [ expirationYear, setExpirationYear ] = useState('');
	const [ cvv, setCvv ] = useState('');
	const [ cardNumber, setCardNumber ] = useState('');
	const [ disabled, setDisabled ] = useState(1);

	const submitCard = (expirationMonth, expirationYear, cvv, cardNumber) => {
		getCard(expirationMonth, expirationYear, cvv, cardNumber);
	};

	useEffect(
		() => {
			if ((expirationMonth.length && expirationYear.length && cvv.length && cardNumber.length) !== 0) {
				if (expirationMonth.length && expirationYear.length === 2 && expirationYear >= 20)
					if (cardNumber.length === 16) {
						if (cvv.length >= 3) {
							setDisabled(0);
						} else {
							setDisabled(1);
						}
					} else {
						setDisabled(1);
					}
			} else {
				setDisabled(1);
			}
		},
		[ expirationMonth, expirationYear, cvv, cardNumber ]
	);

	return (
		<React.Fragment>
			<Row>
				<Col />
				<Col sm={6}>
					<Container className="bg-white rounded-lg shadow-sm p-5 mt-4">
						<Form>
							<Form.Group controlId="CCNumber">
								<Form.Label>Credit Card Number</Form.Label>
								<InputGroup>
									<Form.Control
										placeholder="Your Card Number"
										type="text"
										name="cardNumber"
										required
										onChange={(e) => setCardNumber(e.target.value)}
									/>
								</InputGroup>
								<Form.Text className="text-muted">Enter a valid Credit/Debit Card, 16 digits</Form.Text>
							</Form.Group>

							<Form.Row>
								<Col sm={5}>
									<Form.Group>
										<Form.Label>Expiration</Form.Label>
										<InputGroup>
											<Form.Control
												type="number"
												placeholder="MM"
												min="1"
												max="12"
												required
												onChange={(e) => setExpirationMonth(e.target.value)}
											/>
											<Form.Control
												type="number"
												placeholder="YY"
												min="20"
												max="29"
												required
												onChange={(e) => setExpirationYear(e.target.value)}
											/>
										</InputGroup>
										<Form.Text className="text-muted">Your CC must be valid in 2020</Form.Text>
									</Form.Group>
								</Col>
								<Col sm={2} />
								<Col sm={5}>
									<Form.Group as={Col} controlId="CVV">
										<Form.Label>CVV</Form.Label>
										<Form.Control
											type="password"
											required
											onChange={(e) => setCvv(e.target.value)}
										/>
										<Form.Text className="text-muted">3 or more digits</Form.Text>
									</Form.Group>
								</Col>
							</Form.Row>
						</Form>
						<Row className="mt-4">
							<Col />
							<Col xs={4}>
								<Link to="/second">
									<Button variant="secondary" size="lg">
										Back
									</Button>
								</Link>
							</Col>
							<Col xs={4}>
								<Link to="/summary">
									<Button
										disabled={disabled}
										variant="success"
										size="lg"
										onClick={() => submitCard(expirationMonth, expirationYear, cvv, cardNumber)}
									>
										Final Step
									</Button>
								</Link>
							</Col>
							<Col />
						</Row>
					</Container>
				</Col>
				<Col />
			</Row>
		</React.Fragment>
	);
}
