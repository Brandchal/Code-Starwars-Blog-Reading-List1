import React, { useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { BsHeart } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

function VehicleCard(props) {
	let idvehicles = props.id;
	const { store, actions } = useContext(Context);

	return (
		<div className="col">
			<div className="card-group">
				<div className="card" style={{ width: "18rem" }}>
					<img className="card-img-top" src="https://www.dummyimage.com/400x200" alt="Card image cap" />
					<div className="card-body">
						<h4 className="card-title text-left text-truncate">{props.name}</h4>
						<p className="card-text text-truncate">Manufacturer: {props.manufacturer}</p>
						<p className="card-text text-truncate">Model: {props.model}</p>
						<p className="card-text">Passengers: {props.passengers}</p>
						<Link to={"/detailvehicles/" + idvehicles}>
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
