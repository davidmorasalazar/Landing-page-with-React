//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../../styles/index.scss";

//import your own components
// import { Home } from "./component/home.js";
export function Jumbotron() {
	return (
		<div className="container">
			<section className="jumbotron text-center">
				<div className="container">
					<h1>A WARM WELCOME!</h1>
					<p className="lead text-muted">
						Something short and leading about the collection
						below—its contents, the creator, etc. Make it short and
						sweet, but not too short so folks don’t simply skip over
						it entirely.
					</p>
					<p>
						<a href="#" className="btn btn-primary my-2">
							Main call to action
						</a>
						{/* <a href="#" className="btn btn-secondary my-2">
						Secondary action
					</a> */}
					</p>
				</div>
			</section>
		</div>
	);
}
