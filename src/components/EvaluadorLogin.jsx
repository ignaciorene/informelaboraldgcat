import React from "react";
import EvaluadorLoginWrapper from "../styles/EvaluadorLogin";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Header from "./Header";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Informe from "./Informe";

const EvaluadorLogin = () => {
    return (
        <Router>
            <Switch>
                <Route path="/informe">
                    <Informe />
                </Route>

                <Route path="/">
                <EvaluadorLoginWrapper>
                    <Header />
                    <div class="evaluadorLogin-container">
                        <div class="evaluadorLogin-title">
                            <h2>INGRESE CÓDIGO DE AUTORIZACIÓN</h2>
                        </div>
                        <div class="evaluadorLogin-form">
                            <Form>
                                <Form.Control type="password" size="lg" />
                                <div class="evaluadorLogin-form--button">
                                    <Link to="/informe">
                                        <Button variant="primary" size="lg">ACEPTAR</Button>
                                    </Link>
                                </div>
                            </Form>
                        </div>
                    </div>
                </EvaluadorLoginWrapper>
                </Route>
            </Switch>
        </Router>
    );
}

export default EvaluadorLogin;