import React, { useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { BsHeart } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

function Card(props) {
	let idpeople = props.id;
	const { store, actions } = useContext(Context);

	return (
		<div className="col">
			<div className="card-group">
				<div className="card" style={{ width: "18rem" }}>
					<img className="card-img-top" src="https://www.dummyimage.com/400x200" alt="Card image cap" />
					<div className="card-body">
						<h4 className="card-title text-left">{props.name}</h4>
						<p className="card-text">Gender: {props.gender}</p>
						<p className="card-text">Hair color: {props.hair_color}</p>
						<p className="card-text">Eye color: {props.eye_color}</p>
						<Link to={"/detailpeople/" + idpeople}>
							<button type="button" className="btn btn-outline-primary">
								Learn more
							</button>
						</Link>

						{/* 	<button type="button" className="btn btn-outline-danger ml-3">
							<i className="far fa-heart" />
						</button> */}

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
					</div>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
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

export default Card;
