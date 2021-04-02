import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Image, DropdownButton, Dropdown, Button, ButtonGroup } from "react-bootstrap";
import swImage from "../../img/StartW.png";
import { Context } from "../store/appContext";

export const NavbarMenu = () => {
	const [shown, setShown] = useState(false);

	return (
		<Navbar>
			<Navbar.Brand>
				{/* El Navbar.Brand "Propiedad" es donde ponemos el logo */}
				<Link to="/">
					<img src={swImage} width="100px" height="50%" />
				</Link>
			</Navbar.Brand>
			<div className="ml-auto pr-5">
				<div className={"dropdown " + (shown ? "show" : "")}>
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						data-display="static"
						aria-haspopup="true"
						onClick={() => setShown(!shown)}
						aria-expanded="false">
						Favorites <span className="badge badge-light text-right">0</span>
					</button>
					<div
						className={"dropdown-menu dropdown-menu-right " + (shown ? "show" : "")}
						aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
			</div>
		</Navbar>
	);
};
