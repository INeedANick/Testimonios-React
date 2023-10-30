import React from "react";

function Testimonio(props){
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio"
            src={require(`../imagenes/testimonio-${props.imagen}.png`)}
            alt="primera foto"/>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"> 
                <strong>{props.nombre}</strong> from {props.pais}
                </p>
                <p className="cargo-testimonio">
                    {props.cargo} at <strong>{props.empresa}</strong>
                </p>
                <p className="texto-testimonio">"{props.testimonio}"</p>
            </div>
        </div>
    );
}                        

export default Testimonio;