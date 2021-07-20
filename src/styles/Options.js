import styled from "styled-components";

const OptionsWrapper = styled.div`
    .options-container{
        width:100%;
        margin-top:10em;
    }

    .options-title h1{
        font-size:2.5em;
    }

    .options-button{
        display:inline-block;
        width:30%;
        margin:auto;
        margin-top: 3em;
        text-align:center;
    }

    @media (max-width:704px){
        .options-button{
            width:100%;
        }
    }
`;

export default OptionsWrapper;