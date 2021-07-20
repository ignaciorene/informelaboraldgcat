import React from "react";
import InformeWrapper from "../styles/Informe";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Header from "./Header";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EvaluadoDatos from "./EvaluadoDatos";

const Informe=()=>{
    return(
        <Router>
            <Switch>
                <Route path="/evaluadoDatos">
                    <EvaluadoDatos />
                </Route>

                <Route path="/">
                <InformeWrapper>
                    <Header/>
                    <div class="informe-title">
                        <h1>INFORME LABORAL SEMESTRAL</h1>
                    </div>
                    <div class="informe-form">
                    <Form> 
                        <Form.Group as={Row} className="mb-3" controlId="cuitInput">
                            <Col sm="2"></Col>
                                <Form.Label column sm="4">Seleccione el semestre a informar:</Form.Label>
                            <Col sm="3">
                                <Form.Control as="select" >
                                    <option value="20211">1er Semestre 2021</option>
                                    <option value="20212">2do Semestre 2021</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Link to="/evaluadoDatos">
                            <Button variant="primary" type="submit">ACEPTAR</Button>
                        </Link>
                    </Form>

                    </div>
                </InformeWrapper>
                </Route>
            </Switch>
        </Router>
    );
}

export default Informe;