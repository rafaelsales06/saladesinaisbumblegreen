import React from "react";
import logo from "../imgs/Capa_do_produto.png"
import video from "../video/video.mp4"
import poster from "../imgs/background/Poster.jpg"
import '../styles/Home.css'


export default function Home(){
    return(
        <section className="Home">

        <header className="header">
          <img className="logo" src={logo}></img>
          <div className='head--line'>
            <h1 className='head--one'>
              MUDE <span className='red'>AGORA</span> DE VIDA !
            </h1>
            <h2 className='head--second'>
              APROVEITE A OPORTUNIDADE OU CONTINUE VIVENDO COM POUCO.
            </h2>
            <p className='head--descript'>
              O <span className='green'>METODO BUMBLEGREEN</span> filtra as melhores estrategias para você e te diz onde apostar, 
              você só precisa COPIAR e COLAR
            </p>
          </div>
        </header>

        <video className='story--teling' controls poster={poster} src={video}>
          
        </video>
        <a href="https://pay.kiwify.com.br/C1yRO1y">
          <div className='button--cta'>MUDE AGORA DE VIDA</div>
        </a>
        <p className="security">TODA A TRANSAÇÃO É TOTALMENTE SEGURA 🔒</p>
      </section>
    )
}