import React from "react";
import LoginWrapper from "../styles/Login";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Options from "./Options";

const Login = ({onLogin, cuit, onChangeCuit}) => {
    return (
        <Router>
            <Switch>
                <Route path="/options">
                    <Options />
                </Route>
                <Route path="/">
                <LoginWrapper>
                    <div class="login-container">
                        <div class="login-title">
                            <h2>BIENVENIDO</h2>
                        </div>
                        <div class="login-form">
                            <Form>
                                <Form.Control onChange={onChangeCuit} value={cuit} type="text" placeholder="Ingrese su CUIT sin guiones..." />
                                <div class="login-form--button">
                                    <Link to="/options">
                                        <Button variant="primary" onClick={onLogin}>INGRESAR</Button>
                                    </Link>
                                </div>
                            </Form>
                        </div>
                    </div>
                </LoginWrapper>
                </Route>
            </Switch>
        </Router>
    );
}

export default Login;