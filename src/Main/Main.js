import React from "react";
import './Main.css';
import card1 from '../Assets/playlist/1.jpeg'
import card2 from '../Assets/playlist/2.png'
import card3 from '../Assets/playlist/3.jpeg'
import card4 from '../Assets/playlist/4.jpeg'
import card5 from '../Assets/playlist/5.jpeg'
import card6 from '../Assets/playlist/6.jpeg'
import card7 from '../Assets/playlist/7.jpeg'
import card8 from '../Assets/playlist/8.jpeg'
import card9 from '../Assets/playlist/9.jpeg'
import card10 from '../Assets/playlist/10.jpeg'

const Main = () => {
    return(
        <div  class="playlist_container">
                <div id="result_playlist">
                    <div class="playlist">
                        <h1 id="greeting">Boas vindas</h1>
                        <h2 class="session">Navegar por todas as seções</h2>
                    </div>

                    
                    <div class="offer_scroll_container">
                        <div class="offer_list">
                            <section class="offer_list_iten">
                                
                                <a href="" class="cards">
                                    <div class="cards card1">
                                        <img src={card1} alt=""/>
                                        <span>Boas festas</span>
                                    </div>
                                </a>

                                
                                <a href="" class="cards">
                                    <div class="cards card2">
                                        <img src={card2} alt=""/>
                                        <span>Feitos pra você</span>
                                    </div>
                                </a>
                                
                                
                                <a href="" class="cards">
                                    <div class="cards card3">
                                        <img src={card3} alt=""/>
                                        <span>Lançamentos</span>
                                    </div>
                                </a>
                                
                                
                                <a href="" class="cards">
                                    <div class="cards card4">
                                        <img src={card4} alt=""/>
                                        <span>Creators</span>
                                    </div>
                                </a>
                                
                                
                                <a href="" class="cards">
                                    <div class="cards card5">
                                        <img src={card5} alt=""/>
                                        <span>Para treinar</span>
                                    </div>
                                </a>
                                
                                
                                <a href="" class="cards">
                                    <div class="cards card6">
                                        <img src={card6} alt=""/>
                                        <span>Podcasts</span>
                                    </div>
                                </a>
                                
                                
                                <a href="" class="cards">
                                    <div class="cards card7">
                                        <img src={card7} alt=""/>
                                        <span>Sertanejo</span>
                                    </div>
                                </a>
                                
                                
                                <a href="" class="cards">
                                    <div class="cards card8">
                                        <img src={card8} alt=""/>
                                        <span>Samba e Pagode</span>
                                    </div>
                                </a>
                                
                                
                                <a href="" class="cards">
                                    <div class="cards card9">
                                        <img src={card9} alt=""/>
                                        <span>Funk</span>
                                    </div>
                                </a>
                                
                                
                                <a href="" class="cards">
                                    <div class="cards card10">
                                        <img src={card10} alt=""/>
                                        <span>MPB</span>
                                    </div>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
                <div id="result_artist" class="hidden">
                    <div class="grid_container">
                        <div class="artist_card" id="">
                            <div class="card_img">
                                <img id="artist_img" class="artist_img"/>
                                <div class="play">
                                    <span class="fa fa-solid fa-play"></span>
                                </div>
                            </div>
                            <div class="card_text">
                                <a title="Foo Fighters" class="vst" href="">
                                <span class="artist_name" id="artist_name"></span>
                                <span class="artist_category">Artista</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default Main;