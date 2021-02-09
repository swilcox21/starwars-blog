import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = props => {
	const { store, actions } = useContext(Context);
	const found = store.favorites.find(e => e.name == props.char.name);
	return (
		<div className="myCardsContainer mx-3">
			<div className="card" style={{ width: "18rem" }}>
				<img src={store.img[props.index]} className="card-img-top picturres" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.char.name}</h5>
					<div className="card-text">
						<p>
							Birth Year: {props.char.birth_year}
							<br />
							Gender: {props.char.gender}
							<br />
							height: {props.char.height}
							{/* <br />
							Wieght: {props.char.mass}
							<br />
							Skin Color: {props.char.skin_color} */}
						</p>
					</div>
					<div className="d-flex justify-content-between">
						<Link to={`/details/${props.index}`}>
							<button className="learnMore">LEARN MORE</button>
						</Link>
						<button
							onClick={found ? null : () => actions.addFavorites(props.char.name)}
							className="btn heart">
							<i className="far fa-heart" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
Character.propTypes = {
	char: PropTypes.object,
	key: PropTypes.number,
	index: PropTypes.number
};
