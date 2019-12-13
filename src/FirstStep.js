import React, { useState, useEffect } from 'react';
import {
	Jumbotron,
	Container,
	Card,
	CardGroup,
	Col,
	Row,
	Button,
	ToggleButton,
	ToggleButtonGroup,
	ButtonToolbar
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function FirstStep({ getVals }) {
	const [ payTime, setPayTime ] = useState('later');
	const [ gigaValue, setGigaValue ] = useState(5);
	const [ months, setMonths ] = useState(12);
	const [ buttonStates, setButtonStates ] = useState([ 0, 0, 1 ]);
	const [ subTotal, setFinalPrice ] = useState();
	const handleGigaChange = (val) => setGigaValue(val);
	const handlePayTime = (val) => setPayTime(val);

	const submitVals = (payTime, gigaValue, months, subTotal) => {
		getVals(payTime, gigaValue, months, subTotal);
	};

	useEffect(
		() => {
			let fullPrice = gigaValue * months * 2;
			if (payTime === 'now') {
				let finalPrice = fullPrice / 100 * 90;
				setFinalPrice(finalPrice);
			} else {
				let finalPrice = fullPrice;
				setFinalPrice(finalPrice);
			}
		},
		[ payTime, gigaValue, months ]
	);

	return (
		<React.Fragment>
			<Jumbotron
				style={{
					backgroundImage:
						'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80',
					backgroundPosition: 'calc(10% - 10px)',
					filter: 'brightness(90%)'
				}}
				fluid
			>
				<Container className="text-center text-white">
					<h1>Plans and Pricing, save up to 10%!</h1>
					<h5>Choose the duration of your cloud storage and the amount of Gigabytes you want!</h5>
				</Container>
			</Jumbotron>
			<Container>
				<Row>
					<Col md={4}>Pay upfront and get a 10% discount!</Col>
					<Col md={2} />
					<Col md={6}>
						<p>Choose your gigabytes of storage per month!</p>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<ButtonToolbar className="mb-3">
							<ToggleButtonGroup
								type="radio"
								name="paynow"
								defaultValue={'later'}
								onChange={handlePayTime}
							>
								<ToggleButton type="radio" name="paynow" value={'now'} variant="info">
									Pay now
								</ToggleButton>
								<ToggleButton type="radio" name="paynow" value={'later'} variant="info">
									Pay Later
								</ToggleButton>
							</ToggleButtonGroup>
						</ButtonToolbar>
					</Col>
					<Col md={2} />
					<Col md={6}>
						<ButtonToolbar className="mb-3">
							<ToggleButtonGroup type="radio" name="gbs" defaultValue={5} onChange={handleGigaChange}>
								<ToggleButton type="radio" name="gbs" value={3}>
									3GB
								</ToggleButton>
								<ToggleButton type="radio" name="gbs" value={5}>
									5GB
								</ToggleButton>
								<ToggleButton type="radio" name="gbs" value={10}>
									10GB
								</ToggleButton>
								<ToggleButton type="radio" name="gbs" value={20}>
									20GB
								</ToggleButton>
								<ToggleButton type="radio" name="gbs" value={30}>
									30GB
								</ToggleButton>
								<ToggleButton type="radio" name="gbs" value={50}>
									50GB
								</ToggleButton>
							</ToggleButtonGroup>
						</ButtonToolbar>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col>
						<CardGroup>
							<Card className="text-center" bg="secondary" text="white">
								<Card.Img variant="top" />
								<Card.Body>
									<Card.Title>
										{' '}
										<h2 style={{ fontSize: '3.5rem' }}>3 Months</h2>
									</Card.Title>
									<Card.Text>
										<span style={{ fontSize: '2rem' }}>{gigaValue * 2 * 3}€ in total</span>
										<br />
										<span>Or {gigaValue * 2 * 3 / 100 * 90}€ if you pay now!</span>
									</Card.Text>
									<Button
										className="mt-4"
										type="checkbox"
										size="lg"
										name="months"
										value={3}
										onClick={() => {
											setMonths(3);
											setButtonStates([ 1, 0, 0 ]);
										}}
										active={buttonStates[0]}
									>
										Choose our 3 Months Plan
									</Button>
								</Card.Body>
								<Card.Footer>
									<small>*Perfect if you want to test our service</small>
								</Card.Footer>
							</Card>
							<Card className="text-center" bg="warning">
								<Card.Img variant="top" />
								<Card.Body>
									<Card.Title>
										<h2 style={{ fontSize: '3.5rem' }}>6 Months</h2>
									</Card.Title>
									<Card.Text>
										<span style={{ fontSize: '2rem' }}>{gigaValue * 2 * 6}€ in total</span>
										<br />
										<span>Or {gigaValue * 2 * 6 / 100 * 90}€ if you pay now!</span>
									</Card.Text>
									<Button
										className="mt-4"
										type="checkbox"
										size="lg"
										name="6months"
										value={6}
										onClick={() => {
											setMonths(6);
											setButtonStates([ 0, 1, 0 ]);
										}}
										active={buttonStates[1]}
									>
										Choose our 6 Months Plan
									</Button>
								</Card.Body>
								<Card.Footer>
									<small>*Our recommended plan</small>
								</Card.Footer>
							</Card>
							<Card className="text-center" bg="success" text="white">
								<Card.Img variant="top" />
								<Card.Body>
									<Card.Title>
										<h2 style={{ fontSize: '3.5rem' }}>12 Months</h2>
									</Card.Title>
									<Card.Text>
										<span style={{ fontSize: '2rem' }}>{gigaValue * 2 * 12}€ in total</span>
										<br />
										<span>Or {gigaValue * 2 * 12 / 100 * 90}€ if you pay now!</span>
									</Card.Text>

									<Button
										className="mt-4"
										type="checkbox"
										size="lg"
										name="12months"
										value={12}
										onClick={() => {
											setMonths(12);
											setButtonStates([ 0, 0, 1 ]);
										}}
										active={buttonStates[2]}
									>
										Choose our 12 Months plan
									</Button>
								</Card.Body>
								<Card.Footer>
									<small>*Best value for your money!</small>
								</Card.Footer>
							</Card>
						</CardGroup>
					</Col>
				</Row>
				<Row />
				<Row>
					<Col />
					<Col md={6}>
						<Link className="noUnderline" to="/second">
							<ButtonToolbar className="mt-3 mb-3">
								<Button
									variant="success"
									size="lg"
									block
									onClick={() => submitVals(payTime, gigaValue, months, subTotal)}
								>
									Next Step
								</Button>
							</ButtonToolbar>
						</Link>
					</Col>
					<Col />
				</Row>
			</Container>
		</React.Fragment>
	);
}
