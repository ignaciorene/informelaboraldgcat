import React from "react";
import InformeWrapper from "../styles/Informe";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Header from "./Header";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Confirmacion from "./Confirmacion";

const InformeOperativo=()=>{
    return(
        <Router>
            <Switch>
                <Route path="/confirmacion">
                    <Confirmacion />
                </Route>

                <Route path="/">
                <InformeWrapper>
                    <Header />
                    <div class="informe-title">
                        <h1>INFORME LABORAL SEMESTRAL</h1>
                    </div>
                    <div class="informe-info">
                        <div class="informe-info-title">
                            <h2>COMPETENCIAS</h2>
                        </div>
                        <div class="informe-info-main">
                            <h3>Escala y descripción de calificación</h3>
                            <p>Utilice la siguiente escala de puntaje para cada competencia:</p>
                            <ol>
                                <li>No desarrollado: Comportamiento inadecuado según los requerimientos. Desempeño muy bajo.</li>
                                <li>Desarrollado en parte: Comportamiento que alcanza menos del mínimo esperable, siempre necesita colaboración de otros.</li>
                                <li>Desarrollado: Comportamiento que cumple con las expectativas establecidas. Reúne el dominio de las competencias  requeridas para el puesto.</li>
                                <li>Muy desarrollado: Comportamiento que supera lo esperable, cuida detalles, corrige, verifica, busca mejorar.</li>
                                <li>Sobresaliente: Comportamiento excepcional. Excede ampliamente desafíos del puesto.</li>
                            </ol>
                        </div>
                    </div>
                    <div class="informe-form">
                        <div class="informe-form-title">
                            <h2>INFORME</h2>
                        </div>
                        <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm="2"></Col>
                            <Form.Label column sm={5}>
                            <b>Conocimiento técnico y normativo</b>
                            </Form.Label>
                            <Col sm={1}>
                            <Form.Control type="number" min="1" max="5" required/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm="2"></Col>
                            <Form.Label column sm={5}>
                            <b>Cumplimiento de tares asignadas y protocolos</b>
                            </Form.Label>
                            <Col sm={1}>
                            <Form.Control type="number" min="1" max="5" required/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm="2"></Col>
                            <Form.Label column sm={5}>
                            <b>Servicio al ciudadano</b>
                            </Form.Label>
                            <Col sm={1}>
                            <Form.Control type="number" min="1" max="5" required/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm="2"></Col>
                            <Form.Label column sm={5}>
                            <b>Vocación de servicio</b>
                            </Form.Label>
                            <Col sm={1}>
                            <Form.Control type="number" min="1" max="5" required/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm="2"></Col>
                            <Form.Label column sm={5}>
                            <b>Cuidado de los elementos de trabajo</b>
                            </Form.Label>
                            <Col sm={1}>
                            <Form.Control type="number" min="1" max="5" required/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm="2"></Col>
                            <Form.Label column sm={5}>
                            <b>Iniciativa</b>
                            </Form.Label>
                            <Col sm={1}>
                            <Form.Control type="number" min="1" max="5" required/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm="2"></Col>
                            <Form.Label column sm={5}>
                            <b>Trabajo en equipo</b>
                            </Form.Label>
                            <Col sm={1}>
                            <Form.Control type="number" min="1" max="5" required/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm="2"></Col>
                            <Form.Label column sm={5}>
                            <b>Resolución de problemas</b>
                            </Form.Label>
                            <Col sm={1}>
                            <Form.Control type="number" min="1" max="5" required/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm="2"></Col>
                            <Form.Label column sm={5}>
                            <b>Comunicación</b>
                            </Form.Label>
                            <Col sm={1}>
                            <Form.Control type="number" min="1" max="5" required/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm="2"></Col>
                            <Form.Label column sm={5}>
                            <b>Compromiso institucional</b>
                            </Form.Label>
                            <Col sm={1}>
                            <Form.Control type="number" min="1" max="5" required/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm="2"></Col>
                            <Form.Label column sm={5}>
                            <b>Adaptabilidad y flexibilidad</b>
                            </Form.Label>
                            <Col sm={1}>
                            <Form.Control type="number" min="1" max="5" required/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm="2"></Col>
                            <Form.Label column sm={5}>
                            <b>Presentismo</b>
                            </Form.Label>
                            <Col sm={1}>
                            <Form.Control type="number" min="1" max="5" required/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm="2"></Col>
                            <Form.Label column sm={5}>
                            <b>Relación con su superior </b>
                            </Form.Label>
                            <Col sm={1}>
                            <Form.Control type="number" min="1" max="5" required/>
                            </Col>
                        </Form.Group>

                        <div class="informe-form-observaciones">
                            <h3>Observaciones</h3>
                            <p>Ingrese observaciones sobre el agente que no se encuentren cubiertas por las competencias evaluadas.</p>
                        </div>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm="2"></Col>
                            <Col sm="8">
                            <Form.Control
                                as="textarea"
                                style={{ height: '8em' }}
                                required/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm="2"></Col>
                            <Col sm="8">
                                <Link to="/confirmacion">
                                    <Button variant="primary" type="submit" size="lg">INGRESAR INFORME</Button>
                                </Link>
                            </Col>
                        </Form.Group>
                        
                        </Form>
                    </div>
                </InformeWrapper>
                </Route>
            </Switch>
        </Router>
    );
}

export default InformeOperativo;