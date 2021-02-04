//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
//para acceder a un archivo local, uso la ruta relativa
import "../../styles/index.scss";

//import your own components
// import { Home } from "./component/home.js";
export function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Start bootstrap
			</a>
			{/* <button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button> */}
			<div style={{ marginLeft: "60%" }}>
				<button className="btn btn-dark">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a
								className="nav-link"
								href="https://economia.ucr.ac.cr/es/inicio">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
					</ul>
				</button>
				<button className="btn btn-dark">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a
								className="nav-link"
								href="https://www.youtube.com/watch?v=kpHpG59kDB0">
								About <span className="sr-only">(current)</span>
							</a>
						</li>
					</ul>
				</button>
				<button className="btn btn-dark">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a
								className="nav-link"
								href="https://github.com/davidmorasalazar">
								Services
								<span className="sr-only">(current)</span>
							</a>
						</li>
					</ul>
				</button>
				<button className="btn btn-dark">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Contact
								<span className="sr-only">(current)</span>
							</a>
						</li>
					</ul>
				</button>
			</div>
		</nav>
	);
}
// ReactDOM.render(<NavBar />, document.querySelector("#app"));
