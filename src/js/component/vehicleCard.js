import React, { useEffect, useContext } from "react";
import { Button, Card, CardDeck, ListGroup, ListGroupItem } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { BsHeart } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

function VehicleCard(props) {
	const { store, actions } = useContext(Context);

	return (
		<CardDeck style={{ paddingRight: "1.5rem" }}>
			<Card style={{ width: "18rem" }}>
				<Card.Img
					style={{ height: 190 }}
					variant="top"
					src="https://www.gannett-cdn.com/-mm-/25ad22519f17d7850087576c7d2931f55b837a64/c=0-240-4711-2902/local/-/media/2017/12/01/USATODAY/USATODAY/636477632659207598-sw4.JPG?width=660&height=372&fit=crop&format=pjpg&auto=webp"
					alt="Image not available"
				/>
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<ListGroup className="list-group-flush">
						<ListGroupItem>Manufacturer: {props.manufacturer}</ListGroupItem>
						<ListGroupItem>Model: {props.model}</ListGroupItem>
						<ListGroupItem>Passengers: {props.passengers}</ListGroupItem>
					</ListGroup>
					<Link to={"/detailvehicles/" + props.id}>
						<button type="button" className="btn btn-outline-primary">
							Learn more
						</button>
					</Link>

					{store.favorites.indexOf(props.name) === -1 ? (
						<button
							type="button"
							className="btn btn-outline-danger ml-3"
							onClick={() => actions.setFavorites(props.name)}>
							<BsHeart />
						</button>
					) : (
						<button
							type="button"
							className="btn btn-outline-danger ml-3"
							onClick={() => actions.deleteFavorite(props.name)}>
							<FaHeart />
						</button>
					)}
				</Card.Body>
			</Card>
		</CardDeck>
	);
}

VehicleCard.propTypes = {
	name: PropTypes.string,
	model: PropTypes.string,
	vehicle_class: PropTypes.string,
	manufacturer: PropTypes.string,
	length: PropTypes.string,
	cost_in_credits: PropTypes.string,
	crew: PropTypes.string,
	passengers: PropTypes.string,
	max_atmosphering_speed: PropTypes.string,
	cargo_capacity: PropTypes.string,
	url: PropTypes.string,
	id: PropTypes.any,
	consumables: PropTypes.string
};

export default VehicleCard;
