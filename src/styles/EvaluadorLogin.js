import styled from "styled-components";

const EvaluadorevaluadorLoginWrapper = styled.div`
    .evaluadorLogin-container{
        width: 25em;
        height: 17em;
        border: 1px solid rgba(81, 196, 211,0.75);
        box-shadow: 5px 5px 5px rgba(81, 196, 211,0.25);
        margin: auto;
        margin-top: 10em;
    }

    .evaluadorLogin-title{
        margin-top:1em;
    }

    .evaluadorLogin-title h2{
        font-size:1.8em;
    }

    .evaluadorLogin-form{
        width:80%;
        margin:auto;
        margin-top: 2em;
    }

    .evaluadorLogin-form--button{
        margin-top:1.25em;
    }

    @media (max-width:375px){
        .evaluadorLogin-container{
            width:80%;
        }
    }
`;

export default EvaluadorevaluadorLoginWrapper;