import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="myCardsContainer mx-3 mt-5">
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://media.moddb.com/images/groups/1/9/8071/Blockade.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.plan.name}</h5>
					<p className="card-text">
						<p>
							Climate: {props.plan.climate}
							<br />
							Diameter: {props.plan.diameter}
							<br />
							Population: {props.plan.population}
							{/* <br /> */}
							{/* Wieght: {props.plan.mass}
							<br />
							Skin Color: {props.plan.skin_color} */}
						</p>
					</p>
					<div className="d-flex justify-content-between">
						<Link
							to={{
								pathname: `/detailsTwo/${props.key + 1}`,
								state: {
									planet: props.plan
								}
							}}>
							<button href="#" className="learnMore">
								LEARN MORE
							</button>
						</Link>
						<button onClick={() => actions.addFavorites(props.plan.name)} className="btn heart">
							<i className="far fa-heart" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Planet.propTypes = {
	plan: PropTypes.object,
	key: PropTypes.number,
	name: PropTypes.string
};
