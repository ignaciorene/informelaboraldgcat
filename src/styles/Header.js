import styled from "styled-components";

const HeaderWrapper = styled.div`
    header{
        width: 100%;
        height: 8em;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.35);
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.35);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.35);
    }

    .header-logo{
        height:100%;
        background-color:white;
    }

    #userData{
        flex-grow:2;
    }

    .header-user{
        text-align: right;
        height:100%;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content: flex-end;
        flex-wrap: wrap;
    }

    .header-user--text{
        font-size:2em;
        word-wrap: break-word;
        flex-grow:2;
    }

    .header-user--button{
        margin-left:1em;
        margin-right:1em;
    }

    .header-user--button a{
        text-decoration:none;
        color:black;
        font-size:1.5em;
        font-weight:600;
    }

    .header-user--button a:hover{
        cursor:pointer;
        text-decoration:underline;
    }
`;

export default HeaderWrapper;