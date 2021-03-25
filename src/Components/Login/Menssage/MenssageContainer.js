import React from "react";
import "./MessageContainer.css"

function MenssageContainer(){
    return(
        <div className="o-container-log-left">
            <div className="o-container-log-welcome">
                    <h4 className="o-message-welcome">¡Nos agrada verte de nuevo!</h4>
                    <h1 className="o-title">Market</h1>
                    <div className="o-welcome-separator"></div>
                    <h4 className="o-message">Encuentra los mejores productos al mejor precio</h4>
            </div>
        </div>
    );
}

export default MenssageContainer;