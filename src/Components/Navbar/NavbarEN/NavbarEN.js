import './NavbarEN.css' 
import React from 'react';
import { RiArrowDownSLine , RiArrowRightLine , RiMenu2Line , RiHeartLine , RiShoppingCartLine } from "react-icons/ri";

const NavbarEN = () => {
  return (
 
    <div id="page" className="site page-home">

        <aside className="site-off desktop-hide">
            <div className="off-canvas">
                <div className="canvas-head flexitem">
                    <div className="logo"><a href="/"><span className="circle"></span>.Store</a></div>
                    <a href="#" className="t-close flexcenter"><i className="ri-close-line"></i></a>
                </div>
                <div className="departments"></div>
                <nav></nav>
                <div className="thetop-nav"></div>
            </div>
        </aside>

        <header>
            <div className="header-top mobile-hide">
                <div className="container">
                    <div className="wrapper flexitem">
                        <div className="left">
                            <ul className="flexitem main-links">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Produtos Adicionados</a></li>
                                <li><a href="#">Lista de Desejos</a></li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul className="flexitem main-links">
                                    <li><a href="">Entrar</a></li>
                                    <li><a href="">Minha conta</a></li>
                                    <li><a href="">Rastrear pedido</a></li>
                                    <li><a href="">REAL<span className="icon-small"><RiArrowDownSLine/></span></a>
                                        <ul>
                                            <li><a href="#">USD</a></li>
                                            <li><a href="#">EURO</a></li>
                                            <li><a href="#">GBP</a></li>
                                            <li className="current"><a href="#">REAL</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="">Português <span className="icon-small"><RiArrowDownSLine/></span></a>
                                        <ul>
                                            <li><a href="#">Inglês</a></li>
                                            <li><a href="#">Alemão</a></li>
                                            <li><a href="#">Espanhol</a></li>
                                            <li className="current"><a href="#">Português</a></li>
                                        </ul>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
         

            <div className="header-nav">
                <div className="container">
                    <div className="wrapper flexitem">
                        <a href="#" className="trigger desktop-hide"><span> <RiMenu2Line/></span></a>
                        <div className="left flexitem">
                            <div className="logo"><a href="/"><span className="circle"></span><img src="./img/logo.png" width="80" /></a></div>
                            <nav className="mobile-hide">
                                <ul className="flexitem second-links">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Loja</a></li>
                                    <li className="has-child">
                                        <a href="#">Feminino
                                            <div className="icon-small"><i className={RiArrowDownSLine}></i></div>
                                        </a>
                                        <div className="mega">
                                            <div className="container">
                                                <div className="wrapper">
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Roupas Femininas</h4>
                                                            <ul>
                                                                <li><a href="#">Vestidos</a></li>
                                                                <li><a href="#">Blusas e Camisetas</a></li>
                                                                <li><a href="#">Jaquetas e Casacos</a></li>
                                                                <li><a href="#">Calças e Capris</a></li>
                                                                <li><a href="#">Suéteres</a></li>
                                                                <li><a href="#">Fantasias</a></li>
                                                                <li><a href="#">Moletons & Sweatshirts</a></li>
                                                                <li><a href="#">Pijamas & Roupões</a></li>
                                                                <li><a href="#">Shorts</a></li>
                                                                <li><a href="#">Trajes de banho</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Bijuterias</h4>
                                                            <ul>
                                                                <li><a href="#">Acessórios</a></li>
                                                                <li><a href="#">Malas e Bolsas</a></li>
                                                                <li><a href="#">Colares</a></li>
                                                                <li><a href="#">Anéis</a></li>
                                                                <li><a href="#">Brincos</a></li>
                                                                <li><a href="#">Braceletes</a></li>
                                                                <li><a href="#">Jóias Corporais</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Beleza</h4>
                                                            <ul>
                                                                <li><a href="#">Acessórios de banho</a></li>
                                                                <li><a href="#">Maquiagem e Cosméticos</a></li>
                                                                <li><a href="#">Cuidados da pele</a></li>
                                                                <li><a href="#">Cuidados do cabelo</a></li>
                                                                <li><a href="#">Óleos Essenciais</a></li>
                                                                <li><a href="#">Fragrâncias</a></li>
                                                                <li><a href="#">Sabonetes</a></li>
                                                                <li><a href="#">Máscaras Faciais</a></li>
                                                                <li><a href="#">Spa Kits e Presentes</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Marcas</h4>
                                                            <ul className="women-brands">
                                                                <li><a href="#">Nike</a></li>
                                                                <li><a href="#">Louis Vuitton</a></li>
                                                                <li><a href="#">Hermes</a></li>
                                                                <li><a href="#">Gucci</a></li>
                                                                <li><a href="#">Zalando</a></li>
                                                                <li><a href="#">Tiffany & Co.</a></li>
                                                                <li><a href="#">Zara</a></li>
                                                                <li><a href="#">H&M</a></li>
                                                                <li><a href="#">Cartier</a></li>
                                                                <li><a href="#"></a>Chanel</li>
                                                                <li><a href="#"></a>Hurley</li>                                                                
                                                            </ul>
                                                            <a href="#" className="view-all ">Todas as marcas <RiArrowRightLine/></a>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol products">
                                                        <div className="row">
                                                            <div className="media">
                                                                <div className="thumbnail object-cover">
                                                                    <a href="#">
                                                                  {/*      <img src= alt=""> */}
                                                                    </a>
                                                                </div> 
                                                            </div>
                                                            <div className="text-content">
                                                                <h4>Mais procurados!</h4>
                                                                <a href="#" className="primary-button">Compre agora!</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="#">Masculino</a></li>
                                    <li>
                                        <a href="#">Esportes
                                            <div className="fly-item"><span>New!</span></div>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="right">
                            <ul className="flexitem seconds-links">
                                <li className="mobile-hide"><a href="#">
                                    <div className="icon-large"><RiHeartLine/></div>
                                    <div className="fly-item"><span className="item-number">0</span></div>
                                </a></li>
                                <li><a href="#" className="iscart">
                                    <div className="icon-large">
                                        <RiShoppingCartLine/>
                                        <div className="fly-item"><span className="item-number">0</span></div>
                                    </div>
                                    <div className="icon-text">
                                        <div className="mini-text">Total</div>
                                        <div className="cart-total">R$0.00</div>
                                    </div>
                                </a></li>
                            </ul>
             
                            </div>
                            </div>
                            </div>
                            </div>
                            
                                          
           
        </header>
        </div>

);
};

export default NavbarEN;