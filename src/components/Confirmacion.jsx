import React from "react";
import Header from "./Header";
import ConfirmacionWrapper from "../styles/Confirmacion";
import { Button } from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EvaluadoDatos from "./EvaluadoDatos";

const Confirmacion=()=>{
    return(
        <Router>
            <Switch>
                
            <Route path="/evaluadoDatos">
                <EvaluadoDatos />
            </Route>

            
                <Route path="/">
                <ConfirmacionWrapper>
                    <Header />
                    <div class="confirmacion-container">
                        <h2>¡El informe ha sido enviado con éxito!</h2>
                        <div class="confirmacion-button">
                            <Link to="/evaluadoDatos">
                                <Button variant="primary">VOLVER</Button>
                            </Link>
                        </div>
                    </div>
                </ConfirmacionWrapper>
                </Route>
            </Switch>
        </Router>
    );
}

export default Confirmacion;