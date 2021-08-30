import React, { Component } from "react";

import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";

import axios from "axios";
import { fetchSmurfs } from "./actions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
	componentDidMount() {
		this.props.fetchSmurfs();
	}

	render() {
		return (
			<div className="App">
				<Header />

				<main>
					<SmurfList />
					<AddForm />
				</main>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchSmurfs: () => dispatch(fetchSmurfs()),
	};
};

export default connect(null, mapDispatchToProps)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.*
//2. Call the fetchSmurfs action when the component first loads.*
