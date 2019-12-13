import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import FirstStep from './FirstStep';
import UserData from './UserData';
import CardData from './CardData';
import Summary from './Summary';
import ThankYou from './ThankYou';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			payTime: '',
			gigaValue: '',
			months: '',
			subTotal: '',
			last: '',
			first: '',
			email: '',
			address: '',
			expirationMonth: '',
			expirationYear: '',
			cvv: '',
			cardNumber: ''
		};
		this.getVals = this.getVals.bind(this);
		this.getUser = this.getUser.bind(this);
		this.getCard = this.getCard.bind(this);
	}

	getVals(payTime, gigaValue, months, subTotal) {
		this.setState({
			payTime: payTime,
			gigaValue: gigaValue,
			months: months,
			subTotal: subTotal
		});
	}

	getUser(last, first, email, address) {
		this.setState({
			last: last,
			first: first,
			email: email,
			address: address
		});
	}

	getCard(expirationMonth, expirationYear, cvv, cardNumber) {
		this.setState({
			expirationMonth: expirationMonth,
			expirationYear: expirationYear,
			cvv: cvv,
			cardNumber: cardNumber
		});
	}

	render() {
		return (
			<React.Fragment>
				<BrowserRouter>
					<Navbar bg="dark" variant="dark">
						<Navbar.Brand href="/">Storage Masters</Navbar.Brand>
						<Nav className="mr-auto">
							<Nav.Link href="/">Home</Nav.Link>
						</Nav>
					</Navbar>
					<Route
						exact
						path="/"
						render={(props) => (
							<section>
								<FirstStep getVals={this.getVals} />
							</section>
						)}
					/>
					<Route
						exact
						path="/second"
						render={(props) => (
							<section>
								<UserData
									getUser={this.getUser}
									defaultLast={this.state.last}
									defaultFirst={this.state.first}
									defaultEmail={this.state.email}
									defaultAddress={this.state.address}
								/>
							</section>
						)}
					/>
					<Route
						exact
						path="/third"
						render={(props) => (
							<section>
								<CardData getCard={this.getCard} />
							</section>
						)}
					/>
					<Route
						exact
						path="/summary"
						render={(props) => (
							<section>
								<Summary
									payTime={this.state.payTime}
									gigaValue={this.state.gigaValue}
									months={this.state.months}
									subTotal={this.state.subTotal}
									last={this.state.last}
									first={this.state.first}
									email={this.state.email}
									address={this.state.address}
									expirationMonth={this.state.expirationMonth}
									expirationYear={this.state.expirationYear}
									cvv={this.state.cvv}
									cardNumber={this.state.cardNumber}
								/>
							</section>
						)}
					/>
					<Route
						exact
						path="/thankyou"
						render={(props) => (
							<section>
								<ThankYou email={this.state.email} />
							</section>
						)}
					/>
				</BrowserRouter>
			</React.Fragment>
		);
	}
}

export default App;
