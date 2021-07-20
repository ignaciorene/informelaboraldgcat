import styled from "styled-components";

const EvaluadoDatosWrapper=styled.div`
    .evaluadoDatos-form{
        width:80%;
        margin:auto;
        margin-top:5em;
    }

    .evaluadoDatos-input{
        margin-top:2em;
        margin-bottom:2em;
    }

    .evaluadoDatos-output{
        padding-top:2em;
        border-top:1px solid black;
    }

    @media (max-width:574px){
        .evaluadosDatos-input--button{
            margin-top:1em;
        }
    }

`;

export default EvaluadoDatosWrapper;