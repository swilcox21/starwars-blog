import React, { useContext, useState } from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const NavBar = () => {
	const { store, actions } = useContext(Context);
	const [showDropdown, setShowDropdown] = useState(false);
	const [clickedDropDown, setClickedDropdown] = useState(false);
	let show = "";
	if (clickedDropDown) show = "show";
	return (
		<nav className="navbar navbar-dark" id="myNavBar">
			<Link to={`/home/`}>
				<span className="navbar-brand mb-0 h1 pl-5">
					<i className="fab fa-jedi-order" />
					&nbsp; &nbsp; STAR WARS
					{/* <img src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/cfd241b0-85a3-4363-87b1-51c6732af3fd" /> */}
				</span>
			</Link>
			<a className={"nav-item dropdown " + (showDropdown ? "show" : "")}>
				<button
					className="faves btn btn-outline-dark nav-link dropdown-toggle"
					href="#"
					id="navbarDropdown"
					role="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded={clickedDropDown}
					onClick={() => setClickedDropdown(!clickedDropDown)}>
					FAVORITES <span className="badge badge-secondary">{store.favorites.length}</span>
				</button>
				<div
					className={store.favorites.length > 0 ? "dropdown-menu " + show : "d-none"}
					aria-labelledby="navbarDropdown">
					{store.favorites.length > 0
						? store.favorites.map((elm, index) => (
								<li
									key={index}
									className="dropdown-item d-flex align-items-center justify-content-between">
									<Link to={`/details/${index + 1}`}>{elm.name}</Link>
									&nbsp;&nbsp;
									<i className="fas fa-backspace" onClick={() => actions.deleteFromFavorites(elm)} />
								</li>
						  ))
						: null}
				</div>
			</a>
		</nav>
	);
};

// {store.favorites.map((e, i) => (
// 	<li key={i} className="dropdown-item">
// 		{e.name}
