import React from "react";
import HeaderWrapper from "../styles/Header";
import Logo from "../img/BA.png";

const Header=()=>{
    return(
        <HeaderWrapper>
            <header>
                <div class="header-block">
                    <div class="header-logo"><img src={Logo} width="125em" height="125em" alt="logo BA"/></div>
                </div>
                <div class="header-block" id="userData">
                    <div class="header-user">
                        <div class="header-user--text"><h2>Bienvenido, Usuario Anónimo |</h2></div>
                        <div class="header-user--button"><a href="/">SALIR</a></div>
                    </div>
                </div>
            </header>
        </HeaderWrapper>
    );
}

export default Header;