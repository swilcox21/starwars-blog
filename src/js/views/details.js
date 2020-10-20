import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Details extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: null
		};
	}
	componentDidMount = () => {
		//const { handle } = this.props.match.params;
		const { character } = this.props.location.state;
		this.setState({ results: character });
		// fetch("https://swapi.co/api/people/" + this.props.match.params.id + "?format=json")
		// 	.then(res => res.json())
		// 	.then(response => {
		// 		//console.log("Success:", typeof response);
		// 		//	console.log(response);
		// 		if (typeof response === typeof {}) {
		// 			this.setState({ results: response });
		// 			//console.log(this.state);
		// 		} else {
		// 			this.setState({ results: [] });
		// 		}
		// 	})
		// 	.catch(error => console.error("Error:", error));
	};
	render() {
		// if (!this.state.results) return <p className="p-5">Loading...</p>;
		console.log("Results: ", this.state.results);
		const { results } = this.state;
		return (
			<div className="container col-6">
				<div className="row">
					<div className="col-6">
						<div className="text-center m-3">
							<br />
							<br />
							<br />
							<br />
							<br />
							<h1>{this.props.location.state.character.name}</h1>
						</div>
					</div>
					<div className="col-6">
						<img src="https://loremflickr.com/320/240/starwars" className="w-100" />
					</div>
				</div>
				<div className="row mx-1 details-background border-top border-warning">
					<div className="col-12 d-flex justify-content-center justify-content-between text-warning text-center">
						<div className="appearances p-2 m-3">
							<h6>Name</h6>
							<p>{this.props.location.state.character.name}</p>
						</div>
						<div className="affiliations  p-2 m-3 border-left border-warning">
							<h6>Birth Year</h6>
							<p className="text-center">{this.props.location.state.character.birth_year}</p>
						</div>
						<div className="locations p-2 m-3 border-left border-warning">
							<h6>Gender</h6>
							<p>{this.props.location.state.character.gender}</p>
						</div>
						<div className="gender p-2 m-3 border-left border-warning">
							<h6>Height</h6>
							<p>{this.props.location.state.character.height}</p>
						</div>
						<div className="dimensions p-2 m-3 border-left border-warning">
							<h6>Skin Color</h6>
							<p className="text-center">{this.props.location.state.character.skin_color}</p>
						</div>

						<div className="species p-2 m-3 border-left border-warning">
							<h6>Eye Color</h6>
							<p>{this.props.location.state.character.eye_color}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
Details.propTypes = {
	match: PropTypes.object,
	location: PropTypes.object,
	name: PropTypes.string,
	results: PropTypes.object
};
