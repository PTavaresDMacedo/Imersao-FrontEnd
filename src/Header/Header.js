import React from "react";
import './Header.css';
import smallRight from '../Assets/icons/small-right.png'
import smallLeft from '../Assets/icons/small-left.png'
import search from '../Assets/icons/search.png'

const Header = () => {
    return(
        <nav className="header_navigation">
                <div classNameName="navigation">
                    <button className="arrow_left">
                        <img src={smallLeft} alt="seta esquerda"></img>
                    </button>
                    <button className="arrow_right">
                        <img src={smallRight} alt="seta direita"></img>
                    </button>
                </div>

                <div className="header_search">
                    <img src={search} alt=""></img>
                    <input id="search_input" type="text" maxlength="800" placeholder="O que você quer ouvir?"></input>
                </div>
                <div className="header_login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>        
        </nav>
    )
};

export default Header;