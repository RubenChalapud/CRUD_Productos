import React from "react";
import "./Login.css"
import MenssageContainer from "./Components/Login/Menssage/MenssageContainer";

function Login(){
    return(
        <div className="o-container-login">
            <MenssageContainer></MenssageContainer>
            <div className="o-container-log-form">
                <h1>Iniciar sesión</h1>
                <h4>Para iniciar sesión deberas introducir tu e-mail registrado y tu contraseña</h4>
                <div className="o-container-input-text">
                    <div className="o-inputcolor"></div>
                    <input type="text" className="o-input-text"></input>
                </div>
                <div className="o-container-input-text">
                    <div className="o-inputcolor"></div>
                    <input type="text" className="o-input-text"></input>
                </div>
                <div className="o-container-singin">
                    <h4>¿Eres miebro?</h4>
                    <h4>Registrarse</h4>
                </div>
                <button>Ingresar</button>
                <button>Ingresar con Google</button>
                <button>Ingresar con Facebook</button>
            </div>
        </div>
    );
}

export default Login;