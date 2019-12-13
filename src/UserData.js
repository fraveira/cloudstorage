import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function UserData({ getUser, defaultLast, defaultFirst, defaultEmail, defaultAddress }) {
	const [ last, setLastName ] = useState('');
	const [ first, setFirstName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ address, setAddress ] = useState('');
	const [ disabled, setDisabled ] = useState(1);

	const submitUser = (last, first, email, address) => {
		getUser(last, first, email, address);
	};

	useEffect(
		() => {
			if (defaultLast.length !== 0 && last.length === 0) {
				setLastName(defaultLast);
			} else if (defaultLast !== last && last.length !== 0) {
				setLastName(last);
			}

			if (defaultFirst.length !== 0 && first.length === 0) {
				setFirstName(defaultFirst);
			} else {
				setFirstName(first);
			}

			if (defaultEmail.length !== 0 && email.length === 0) {
				setEmail(defaultEmail);
			} else {
				setEmail(email);
			}

			if (defaultAddress.length !== 0 && address.length === 0) {
				setAddress(defaultAddress);
			} else {
				setAddress(address);
			}

			if (
				(last.length || defaultLast.length !== 0) &&
				(first.length || defaultFirst.length !== 0) &&
				(email.length || defaultEmail.length !== 0) &&
				(address.length || defaultAddress.length !== 0)
			) {
				if (
					(last || defaultLast !== '') &&
					(first || defaultFirst !== '') &&
					(email || defaultEmail !== '') &&
					(address || defaultAddress !== '')
				)
					if (
						(email.includes('@') && email.includes('.com')) ||
						(defaultEmail.includes('@') && defaultEmail.includes('.com'))
					) {
						setDisabled(0);
					} else {
						setDisabled(1);
					}
			} else {
				setDisabled(1);
			}
		},
		[ last, first, email, address, disabled ]
	);

	return (
		<React.Fragment>
			<Container className="mt-4">
				<Row>
					<Col />
					<Col sm={6}>
						<Form>
							<Form.Group controlId="formLastName">
								<Form.Label>Last Name </Form.Label>
								<Form.Control
									required
									type="text"
									placeholder="Enter Last Name"
									className="form-control-lg"
									name="last"
									defaultValue={defaultLast}
									onChange={(e) => setLastName(e.target.value)}
								/>
							</Form.Group>

							<Form.Group controlId="formFirstName">
								<Form.Label>First Name</Form.Label>
								<Form.Control
									required
									type="text"
									placeholder="Enter First Name"
									className="form-control-lg"
									name="first"
									defaultValue={defaultFirst}
									onChange={(e) => setFirstName(e.target.value)}
								/>
							</Form.Group>

							<Form.Group controlId="formBasicEmail">
								<Form.Label>E-Mail</Form.Label>
								<Form.Control
									required
									type="email"
									placeholder="Enter your e-mail"
									className="form-control-lg"
									name="email"
									defaultValue={defaultEmail}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<Form.Text className="text-muted">
									Enter a valid email, we accept only '.com' e-mails.
								</Form.Text>
							</Form.Group>

							<Form.Group controlId="formBasicEmail2">
								<Form.Label>Address</Form.Label>
								<Form.Control
									required
									type="address"
									placeholder="Enter your Address"
									className="form-control-lg"
									name="address"
									defaultValue={defaultAddress}
									onChange={(e) => setAddress(e.target.value)}
								/>
							</Form.Group>
						</Form>
						<Row>
							<Col />
							<Col xs={4}>
								<Link className="noUnderline" to="/">
									<Button variant="secondary" size="lg">
										Back
									</Button>
								</Link>
							</Col>
							<Col xs={4}>
								<Link className="noUnderline" to="/third">
									<Button
										disabled={disabled}
										variant="success"
										size="lg"
										onClick={() => submitUser(last, first, email, address)}
									>
										Next Step
									</Button>
								</Link>
							</Col>
							<Col />
						</Row>
					</Col>
					<Col />
				</Row>
			</Container>
		</React.Fragment>
	);
}
