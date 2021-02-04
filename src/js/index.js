//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
// import { Home } from "./component/home.js";
import { NavBar } from "./component/Navbar.js";
import { FootBar } from "./component/Footbar.js";
import { Jumbotron } from "./component/Jumbotron.js";
import { Cards } from "./component/cards.js";
// function FancyButton(props) {
// 	return (
// 		<button
// 			className={props.className}
// 			onClick={function() {
// 				alert(props.text);
// 			}}>
// 			{props.label}
// 		</button>
// 	);
// }

// function FancyAge(props) {
// 	return <div className="fancy-age">{props.age}</div>;
// }

// function Greetings(props) {
// 	let newAge = props.age + 5;

// 	return (
// 		<div>
// 			<p>
// 				Hola {props.name}, ¿que tal?. Sé que tienes{" "}
// 				<FancyAge age={newAge} /> años
// 			</p>
// 		</div>
// 	);
// }

function App() {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<Cards />
			{/* <Greetings name="Jose" age={26} />
			<FancyButton
				text="Que tal?"
				label="Boton primario"
				className="btn btn-primary"
			/>
			<FancyButton
				text="Que mas pues?"
				label={"Boton secundario"}
				className="btn btn-danger"
			/> */}
			<FootBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector("#app"));
