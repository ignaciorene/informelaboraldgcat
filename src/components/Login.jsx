import React from "react";
import LoginWrapper from "../styles/Login";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Login = ({onLogin, cuit, onChangeCuit}) => {
    return (
        <Router>
            <Switch>
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
                                    <Button variant="primary" onClick={onLogin}>INGRESAR</Button>
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