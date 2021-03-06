import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";

export default class Main extends React.Component {
	render() {
		return(
			<main>
				<Redirect from="/" to="/home"/>
				
				<h1 id="title">Night Night</h1>
				<Switch>
					<Route path="/home" component={Home}/>
					<Route path="/login" component={Login}/>
				</Switch>
			</main>
		);
	}
}