import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../../styles/index.scss";
let carta1 = {
    titulo: "carta1",
    foto: 
    "https://wonderfulengineering.com/wp-content/uploads/2014/06/galaxy-wallpapers-8.jpg",
    contenido:
    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
};
let carta2 = {
    titulo: "carta2",
    foto: 
    "https://wonderfulengineering.com/wp-content/uploads/2014/06/galaxy-wallpapers-8.jpg",
    contenido:
    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
};
let carta3 = {
    titulo: "carta3",
    foto: 
    "https://wonderfulengineering.com/wp-content/uploads/2014/06/galaxy-wallpapers-8.jpg",
    contenido:
    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
};
let arraycartas = [carta1,carta2,carta3];
return arraycartas.map(function(carta,i)) {
    return (
        <cartas
        key = {i}
        titulo ={arraycartas[i].titulo}
        foto={arraycartas[i].foto}
        contenido={arraycartas[i].contenido}
        />
    );
});


