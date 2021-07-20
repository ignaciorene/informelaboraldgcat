import styled from "styled-components";

const ResultadoWrapper=styled.div`
    .resultado-title{
        margin-top:2em;
    }
    
    .resultado-datosPersonales{
        display:flex;
        margin-top:3em;
        width:100%;
        flex-flow:wrap;
        justify-content: space-evenly;
    }

    .resultado-datosPersonales-block{
        text-align:left;
    }

    .resultado-datosPersonales-block h3{
        text-align:center;
        margin-bottom:1em;
        font-size:1.5em;
    }

    .resultado-subtitle{
        margin-top: 2em;
        margin-bottom:2em;
        padding-top:2em;
        border-top:1px solid black;
    }

    .resultado-block{
        word-wrap: break-word;
        margin-top:2em;
    }

    .resultado-table{
        width:80%;
        margin:auto;
    }

`;

export default ResultadoWrapper;