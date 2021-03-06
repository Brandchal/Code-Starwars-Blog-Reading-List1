import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Container, Row, Col } from "react-bootstrap"; /*Destructure*/

import { Home } from "./views/home";
import { DetailPeople } from "./views/detailpeople";
import { DetailPlanets } from "./views/detailplanets";
import { DetailVehicles } from "./views/detailvehicles";
import injectContext from "./store/appContext";

import { NavbarMenu } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<Container fluid>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavbarMenu />
					<br />
					<br />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route exact path="/detailpeople/:theid">
							<br />
							<br />
							<DetailPeople />
						</Route>
						<Route exact path="/detailplanets/:theid">
							<br />
							<br />
							<DetailPlanets />
						</Route>
						<Route exact path="/detailvehicles/:theid">
							<br />
							<br />
							<DetailVehicles />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</Container>
	);
};

export default injectContext(Layout);
