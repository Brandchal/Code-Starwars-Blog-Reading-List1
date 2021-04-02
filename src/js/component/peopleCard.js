import React, { useEffect, useContext } from "react";
import { Button, Card, CardDeck, ListGroup, ListGroupItem } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { BsHeart } from "react-icons/bs";
import { FaHeart, FaCartArrowDown } from "react-icons/fa";

function PeopleCard(props) {
	let idpeople = props.id;
	const { store, actions } = useContext(Context);

	return (
		<CardDeck style={{ paddingRight: "1.5rem" }}>
			<Card style={{ width: "18rem" }}>
				<Card.Img
					style={{ height: 190 }}
					variant="top"
					src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/test/5cbeea135cafe88451149213/sw1.jpg"
					alt="Image not available"
				/>
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<ListGroup className="list-group-flush">
						<ListGroupItem>Gender: {props.gender}</ListGroupItem>
						<ListGroupItem>Hair color: {props.hair_color}</ListGroupItem>
						<ListGroupItem>Eye color: {props.eye_color}</ListGroupItem>
					</ListGroup>
					<Link to={"/detailpeople/" + idpeople}>
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

PeopleCard.propTypes = {
	name: PropTypes.string,
	age: PropTypes.string,
	height: PropTypes.string,
	mass: PropTypes.string,
	hair_color: PropTypes.string,
	skin_color: PropTypes.string,
	eye_color: PropTypes.string,
	url: PropTypes.string,
	id: PropTypes.any,
	gender: PropTypes.string
};

export default PeopleCard;
