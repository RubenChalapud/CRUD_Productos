import React, { useState } from "react";
import "./Login.css"
import MenssageContainer from "./Components/Login/Menssage/MenssageContainer";

function Singup(){
    return(
        <div className="o-container-login">
            <MenssageContainer></MenssageContainer>
            <div className="o-container-log-form">
                <h1>Registrarse</h1>
                <h4>Para registrarse deberas introducir tu e-mail registrado y una contraseña</h4>
                <div className="o-container-input-text">
                    <div className="o-inputcolor"></div>
                    <input type="text" className="o-input-text"></input>
                </div>
                <div className="o-container-input-text">
                    <div className="o-inputcolor"></div>
                    <input type="text" className="o-input-text"></input>
                </div>
                <button>Registrarse</button>
            </div>
        </div>
    );
}

export default Singup;