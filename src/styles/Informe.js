import styled from "styled-components";

const InformeWrapper=styled.div`
    .informe-title{
        margin-top:2em;
    }

    .informe-title h1{
        font-size:3em;
    }

    .informe-info-title{
        margin-top:3em;
    }

    .informe-info-title h2{
        font-size:2em;
    }

    .informe-info-main{
        text-align:left;
        width:80%;
        word-wrap: break-word;
        margin:auto;
        padding-bottom:2em;
        border-bottom:1px solid black;
    }

    .informe-form{
        margin-top:2em;
    }

    .informe-form-title{
        width:100%;
        margin-bottom:2em;
    }

    .informe-form-observaciones{
        word-wrap: break-word;
        width:65%;
        margin:auto;
        margin-top:2em;
    }

    .informe-form-observaciones p{
        text-align:left;
    }

    @media (max-width:574px){
        .informe-form-observaciones{
            width:95%;
        }
    }

`;

export default InformeWrapper;