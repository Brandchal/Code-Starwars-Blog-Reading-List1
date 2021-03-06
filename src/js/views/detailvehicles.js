import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailVehicles = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container">
			<div className="row">
				<div className="col-8">
					<div className="media">
						<img
							className="mr-3"
							src="https://www.gannett-cdn.com/-mm-/25ad22519f17d7850087576c7d2931f55b837a64/c=0-240-4711-2902/local/-/media/2017/12/01/USATODAY/USATODAY/636477632659207598-sw4.JPG?width=660&height=372&fit=crop&format=pjpg&auto=webp"
							alt="Image not available"
							style={{ height: 190, width: "18rem" }}
						/>
						<div className="media-body">
							<h5 className="mt-0">{store.vehicles[params.theid].name}</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur adipiscing elit mi vestibulum pharetra, volutpat
								convallis potenti donec mollis iaculis lacus pulvinar erat, dignissim mauris commodo dis
								dictumst tortor placerat risus nec. Fringilla cras ridiculus auctor tellus at convallis
								elementum vehicula arcu ac.
							</p>
						</div>
					</div>
				</div>
				<div className="col-4 bg-light pt-2">
					<ul className="list-unstyled font-weight-bold">
						<li>Model: {store.vehicles[params.theid].model}</li>
						<li>Vehicle Class: {store.vehicles[params.theid].vehicle_class}</li>
						<li>Manufacturer: {store.vehicles[params.theid].manufacturer}</li>
						<li>Length: {store.vehicles[params.theid].length}</li>
						<li>Cost In Credits: {store.vehicles[params.theid].cost_in_credits}</li>
						<li>Crew: {store.vehicles[params.theid].crew}</li>
						<li>Passengers: {store.vehicles[params.theid].passengers}</li>
						<li>Max Atmosphering Speed: {store.vehicles[params.theid].max_atmosphering_speed}</li>
						<li>Cargo Capacity: {store.vehicles[params.theid].cargo_capacity}</li>
						<li>Consumables: {store.vehicles[params.theid].consumables}</li>
					</ul>
				</div>
			</div>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};

DetailVehicles.propTypes = {
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
	consumables: PropTypes.string,
	key: PropTypes.number,
	match: PropTypes.object
};
