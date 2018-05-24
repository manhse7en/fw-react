import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router-dom";
import * as qs from "query-string";

class HomePage extends Component {
	componentDidMount() {
		console.log(this.props);
	}

	head() {
		return (
			<Helmet>
				<title>Bingbe</title>
				<meta property="og:title" content="Bingbe" />
			</Helmet>
		);
	}

	render() {
		return (
			<div>
				{this.head()}
				<h1>Home</h1>
			</div>
		);
	}
}

export default {
	component: withRouter(connect(null,null)(HomePage))
}