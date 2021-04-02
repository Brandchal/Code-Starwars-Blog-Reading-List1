import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Image, DropdownButton, Dropdown, Button, ButtonGroup, Col, Row } from "react-bootstrap";
import swImage from "../../img/StartW.png";
import { Context } from "../store/appContext";
import { FaTrash } from "react-icons/fa";

export const NavbarMenu = () => {
	const [shown, setShown] = useState(false);
	const { store, actions } = useContext(Context);

	return (
		<Navbar>
			<Navbar.Brand>
				{/* El Navbar.Brand "Propiedad" es donde ponemos el logo */}
				<Link to="/">
					<img src={swImage} width="100px" height="50%" />
				</Link>
			</Navbar.Brand>
			<div className="ml-auto pr-6">
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Favorites {store.favorites.length}
					</Dropdown.Toggle>

					<Dropdown.Menu alignRight className="dropdown dropdown-align-right">
						{store.favorites.length > 0 ? (
							<ul>
								{store.favorites.map((item, index) => {
									return (
										<li key={index}>
											{item}
											<button className="trash" onClick={() => actions.delFav(item)}>
												<FaTrash />
											</button>
										</li>
									);
								})}
							</ul>
						) : (
							<p className="listfav">(empy) </p>
						)}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</Navbar>
	);
};
