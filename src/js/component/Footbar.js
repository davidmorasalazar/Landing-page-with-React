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
export function FootBar() {
	return (
		<nav
			className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom"
			style={{ height: "50px" }}>
			<label className="navbar-brand" style={{ marginLeft: "40%" }}>
				Copyright &copy; Your Website 2021
			</label>
		</nav>
	);
}
