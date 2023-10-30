import React from "react";

function Testimonio(){
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio"
            src={require("../imagenes/testimonio-primero.png")}
            alt="primera foto"/>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"> Xiangling from Liyue</p>
                <p className="cargo-testimonio">Software Engineer at Spotify</p>
                <p className="texto-testimonio">"I've always struggled with learning JavaScript. I've taken many courses but 
                freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms 
                on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer 
                at Spotify."</p>


            </div>
        </div>
    );
}                                                           