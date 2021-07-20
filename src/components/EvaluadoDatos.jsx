import React from "react";
import EvaluadoDatosWrapper from "../styles/EvaluadoDatos";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Header from "./Header";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import InformeOperativo from "./InformeOperativo";

const EvaluadoDatos=()=>{
    return(
        <Router>
            <Switch>
                <Route path="/informeOperativo">
                    <InformeOperativo />
                </Route>

                <Route path="/">
                <EvaluadoDatosWrapper>
                    <Header />
                    <div class="evaluadoDatos-form">
                        <div class="evaluadoDatos-form--title">
                            <h1>INGRESE DATOS DEL AGENTE A CARGO</h1>
                            <div class="evaluadoDatos-input">
                                <Form>
                                <Form.Group as={Row} className="mb-3" controlId="cuitInput">
                                    <Col sm="3"></Col>
                                    <Form.Label column sm="1">CUIT</Form.Label>
                                    <Col sm="4">
                                        <Form.Control type="text" placeholder="" />
                                    </Col>
                                    <Col sm="1">
                                        <div class="evaluadosDatos-input--button">
                                            <Button variant="primary">BUSCAR</Button>
                                        </div>
                                    </Col>
                                </Form.Group>
                                </Form>
                            </div>
                            <div class="evaluadoDatos-output">
                                <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="lastName">
                                    <Form.Label>Apellido</Form.Label>
                                        <Form.Control disabled />
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="name">
                                    <Form.Label>Nombre</Form.Label>
                                        <Form.Control disabled />
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="name">
                                    <Form.Label>Cargo</Form.Label>
                                        <Form.Control disabled />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} md="3" controlId="lastName">
                                    <Form.Label>Base</Form.Label>
                                        <Form.Control disabled />
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="name">
                                    <Form.Label>Área</Form.Label>
                                        <Form.Control disabled />
                                    </Form.Group>
                                    <Form.Group as={Col} md="2" controlId="name">
                                    <Form.Label>Turno</Form.Label>
                                        <Form.Control disabled />
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="name">
                                    <Form.Label>Función</Form.Label>
                                        <Form.Control disabled />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Col sm="4"></Col>
                                    <Form.Group as={Col} md="4" controlId="lastName">
                                        <Link to="/informeOperativo">
                                            <Button variant="primary" type="submit" size="lg">REALIZAR INFORME</Button>
                                        </Link>
                                    </Form.Group>
                                </Row>
                                </Form>
                            </div>
                        </div>
                    </div>
                </EvaluadoDatosWrapper>
                </Route>
            </Switch>
        </Router>
    );
}

export default EvaluadoDatos;