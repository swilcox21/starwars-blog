import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class DetailsTwo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: null
		};
	}
	componentDidMount = () => {
		// 		//const { handle } = this.props.match.params;
		const { planet } = this.props.location.state;
		this.setState({ results: planet });
		// 		// fetch("https://swapi.co/api/people/" + this.props.match.params.id + "?format=json")
		// 		// 	.then(res => res.json())
		// 		// 	.then(response => {
		// 		// 		//console.log("Success:", typeof response);
		// 		// 		//	console.log(response);
		// 		// 		if (typeof response === typeof {}) {
		// 		// 			this.setState({ results: response });
		// 		// 			//console.log(this.state);
		// 		// 		} else {
		// 		// 			this.setState({ results: [] });
		// 		// 		}
		// 		// 	})
		// 		// 	.catch(error => console.error("Error:", error));
	};
	render() {
		// if (!this.state.results) return <p className="p-5">Loading...</p>;
		console.log("Results: ", this.state.results);
		return (
			<div className="container col-6">
				<div className="row">
					<div className="col-6">
						<img src="https://loremflickr.com/320/240/planets" className="w-100" />
					</div>
					<div className="col-6">
						<div className="text-center m-3">
							<h1>{this.props.location.state.planet.name}</h1>
						</div>
					</div>
				</div>
				<div className="row mx-1 background border-top border-warning">
					<div className="col-12 d-flex justify-content-between text-warning text-center">
						<div className="appearances p-2 m-3">
							<h6>Name</h6>
							<p>{this.props.location.state.planet.name}</p>
						</div>
						<div className="affiliations m-3 p-2">
							<h6>Climate</h6>
							<p className="text-center">{this.props.location.state.planet.climate}</p>
						</div>
						<div className="locations p-2 m-3">
							<h6>Gravity</h6>
							<p>{this.props.location.state.planet.gravity}</p>
						</div>
						<div className="gender p-2 m-3">
							<h6>Terrain</h6>
							<p>{this.props.location.state.planet.terrain}</p>
						</div>
						<div className="dimensions p-2 m-3">
							<h6>Population</h6>
							<p className="text-center">{this.props.location.state.planet.population}</p>
						</div>
						<div className="species p-2 m-3">
							<h6>diameter</h6>
							<p>{this.props.location.state.planet.diameter}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
DetailsTwo.propTypes = {
	match: PropTypes.object,
	location: PropTypes.object,
	name: PropTypes.string,
	results: PropTypes.object
};
