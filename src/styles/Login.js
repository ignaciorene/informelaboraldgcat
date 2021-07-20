import styled from "styled-components";

const LoginWrapper = styled.div`

    .login-container{
        width: 25em;
        height: 15em;
        border: 1px solid rgba(81, 196, 211,0.75);
        box-shadow: 5px 5px 5px rgba(81, 196, 211,0.25);
        margin: auto;
        margin-top: 10em;
        background-color:white;
    }

    .login-title{
        margin-top:1em;
    }

    .login-title h2{
        font-size:2em;
    }

    .login-form{
        width:80%;
        margin:auto;
        margin-top: 2em;
    }

    .login-form--button{
        margin-top:1.25em;
    }

    @media (max-width:375px){
        .login-container{
            width:80%;
        }
    }
`;

export default LoginWrapper;