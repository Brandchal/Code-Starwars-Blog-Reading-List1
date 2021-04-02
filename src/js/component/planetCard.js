import React, { useEffect, useContext } from "react";
import { Button, Card, CardDeck, ListGroup, ListGroupItem } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { BsHeart } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

function PlanetCard(props) {
	let idplanets = props.id;
	const { store, actions } = useContext(Context);

	return (
		<CardDeck style={{ paddingRight: "1.5rem" }}>
			<Card style={{ width: "18rem" }}>
				<Card.Img
					style={{ height: 190 }}
					variant="top"
					src="https://i.blogs.es/69fdcc/star-wars-saga/450_1000.jpg"
					alt="Image not available"
				/>
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<ListGroup className="list-group-flush">
						<ListGroupItem>Population: {props.population}</ListGroupItem>
						<ListGroupItem>Climate: {props.climate}</ListGroupItem>
						<ListGroupItem>Terrain: {props.terrain}</ListGroupItem>
					</ListGroup>
					<Link to={"/detailplanets/" + idplanets}>
						<button type="button" className="btn btn-outline-primary">
							Learn more
						</button>
					</Link>

					{store.favorites.indexOf(props.name) === -1 ? (
						<button
							type="button"
							className="btn btn-outline-danger ml-3"
							onClick={() => actions.addFav(props.name)}>
							<BsHeart />
						</button>
					) : (
						<button
							type="button"
							className="btn btn-outline-danger ml-3"
							onClick={() => actions.delFav(props.name)}>
							<FaHeart />
						</button>
					)}
				</Card.Body>
			</Card>
		</CardDeck>
	);
}

PlanetCard.propTypes = {
	name: PropTypes.string,
	diameter: PropTypes.string,
	rotation_period: PropTypes.string,
	orbital_period: PropTypes.string,
	gravity: PropTypes.string,
	population: PropTypes.string,
	climate: PropTypes.string,
	terrain: PropTypes.string,
	url: PropTypes.string,
	id: PropTypes.any,
	surface_water: PropTypes.string
};

export default PlanetCard;
