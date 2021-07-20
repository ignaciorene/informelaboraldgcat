import React from "react";
import ResultadoWrapper from "../styles/Resultado";
import { Table } from "react-bootstrap";

const Resultado=()=>{
    return(
        <ResultadoWrapper>
            <div class="resultado-title">
                <h1>INFORME LABORAL SEMESTRAL - 1er Semestre 2021</h1>
            </div>
            <div class="resultado-datosPersonales">
                <div class="resultado-datosPersonales-block">
                    <h3>DATOS DEL SUPERIOR</h3>
                    <p><b>CUIT:</b> 20379898921</p>
                    <p><b>APELLIDO Y NOMBRE:</b> Ignacio René</p>
                    <p><b>CARGO:</b> Gerente</p>
                </div>

                <div class="resultado-datosPersonales-block">
                    <h3>DATOS DEL PERSONAL</h3>
                    <p><b>CUIT:</b> 20379898921</p>
                    <p><b>APELLIDO Y NOMBRE:</b> Ignacio René</p>
                    <p><b>CARGO:</b> Agente</p>
                </div>
            </div>
            <div class="resultado-subtitle">
                <h2>Resultados</h2>
            </div>
            <div class="resultado-main">
                <div class="resultado-block">
                <div class="resultado-table">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Competencia</th>
                            <th>Resultado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Competencia laboral y administrativa</td>
                            <td>Muy desarrollado</td>
                            </tr>
                            <tr>
                            <td>Competencia laboral y administrativa</td>
                            <td>Muy desarrollado</td>
                            </tr>
                            <tr>
                            <td>Competencia laboral y administrativa</td>
                            <td>Muy desarrollado</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                
                </div>
                <div class="resultado-block">
                    <h3>Observaciones</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore corrupti iste eveniet est itaque dicta asperiores temporibus? Voluptatum aliquam minima veniam expedita. Non dolorum quo explicabo eveniet ipsum corporis amet!</p>
                </div>
            </div>
        </ResultadoWrapper>
    );
}

export default Resultado;