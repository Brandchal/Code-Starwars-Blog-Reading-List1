import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailPeople = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container">
			<div className="row">
				<div className="col-8">
					<div className="media">
						<img
							className="mr-3"
							src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/test/5cbeea135cafe88451149213/sw1.jpg"
							alt="Image not available"
							style={{ height: 190, width: "18rem" }}
						/>
						<div className="media-body">
							<h5 className="mt-0">{store.people[params.theid].name}</h5>
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
						<li>Birth Year: {store.people[params.theid].birth_year}</li>
						<li>Eye Color: {store.people[params.theid].eye_color}</li>
						<li>Gender: {store.people[params.theid].gender}</li>
						<li>Hair Color: {store.people[params.theid].hair_color}</li>
						<li>Mass: {store.people[params.theid].mass}</li>
						<li>Skin Color: {store.people[params.theid].skin_color}</li>
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

DetailPeople.propTypes = {
	name: PropTypes.string,
	age: PropTypes.string,
	height: PropTypes.string,
	mass: PropTypes.string,
	hair_color: PropTypes.string,
	skin_color: PropTypes.string,
	eye_color: PropTypes.string,
	url: PropTypes.string,
	key: PropTypes.number,
	gender: PropTypes.string,
	match: PropTypes.object
};
