import React from "react";
import './Sidebar.css';
import spotifyLogo from '../Assets/icons/logo-spotify.png'

const Sidebar = () => {
    return(
        <div class="sidebar">
        <nav class="sidebar_navigation">
            <div class="logo">
                <a href="">
                    <img src={spotifyLogo} alt="Logo do Spotify"/>
                </a>
                
                    <ul>
                        <li>
                            <a href="">
                                <span class="fa fa-home"></span>
                                <span>Início</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span class="fa fa-search"></span>
                                <span>Buscar</span>
                            </a>
                        </li>
                    </ul>
                
            </div>
        </nav>
        <div class="library">
            <div class="library_content">
                <button class="library_button">
                    <span class="fa fas fa-book"></span>
                    <span>Sua Biblioteca</span>
                </button>
                <span class="fa fa-plus"></span>
            </div>

            <section class="section_playlist">
                <div class="section_playlist_content">
                    <span class="text title">Crie sua primeira Playlist</span>
                    <span class="text subtitle">É fácil, vamos te ajudar!</span>
                    <button class="section_playlist_button">
                        <span>Criar Playlist</span>
                    </button>
                </div>
            </section>

            <div class="cookies">
                <a href="">Cookies</a>
            </div>

            <div class="languages">
                <button class="languages_button">
                    <span class="fa fa-globe"></span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
    </div>
    )
};

export default Sidebar;