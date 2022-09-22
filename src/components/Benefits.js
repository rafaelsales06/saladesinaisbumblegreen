import React from "react";
import "../styles/Home.css";
import Certo from "../imgs/sinalcerto.png"

export default function benefits(){
    return(
        <article className="Benefits">
            <hr width="70%" className="line"></hr>
            <h3 className="benefits--title">AINDA TEM DUVIDAS ?</h3>
            <p className="benefits--subtitle">VEJA QUAIS SÃO AS VANTAGENS :</p>

            <div className="benefits--container">
                <div className="benefits--box">
                    <img src={Certo} className="Certo"></img>
                    <p>Você vai ter a possibilidade de <strong>LUCRAR</strong>  a hora que quiser pois o nosso sistema e o nosso robô <br></br>
                     fazem <strong>ANALISES</strong>  24hrs por dia usando as estrategias mais <strong>PRECISAS</strong>  possiveis.</p>
                </div>

                <div className="benefits--box">
                    <img src={Certo} className="Certo"></img>
                    <p>Ganhe dinheiro investindo pouco e se caso você não obtiver lucro nos primeiros 7 dias nós <br></br> 
                    vamos <strong>DEVOLVER</strong>  o seu dinheiro na mesma hora.</p>
                </div>

                <div className="benefits--box">
                    <img src={Certo} className="Certo"></img>
                    <p>Suporte 24 hrs para você tirar as suas duvidas a <strong>QUALQUER</strong> hora do dia com os nossos <br></br> 
                    consutores.</p>
                </div>
            </div>
        </article>
    )
}