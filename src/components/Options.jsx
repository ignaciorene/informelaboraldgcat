import React from "react";
import OptionsWrapper from "../styles/Options";
import { Button } from "react-bootstrap";
import Header from "./Header";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EvaluadorLogin from "./EvaluadorLogin";
import Resultado from "./Resultado";

const Options = () => {
    
    return (
        <Router>
            <Switch>
                <Route path="/realizarInforme">
                    <EvaluadorLogin />
                </Route>

                <Route path="/verResultado">
                    <Resultado />
                </Route>

                <Route path="/">
                <OptionsWrapper>
                    <Header />
                    <div class="options-container">
                        <div class="options-title">
                            <h1>INFORME LABORAL SEMESTRAL</h1>
                        </div>
                        <div class="options-button">
                            <Link to="/realizarInforme">
                                <Button variant="primary" size="lg">REALIZAR INFORME</Button>
                            </Link>
                        </div>
                        <div class="options-button">
                            <Link to="/verResultado">
                                <Button variant="primary" size="lg">VER RESULTADOS</Button>
                            </Link>
                        </div>
                    </div>
                </OptionsWrapper>
                </Route>
            </Switch>
        </Router>
    );
}

export default Options;