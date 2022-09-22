import React from "react";
import "../styles/Home.css";
import Carousel from "./Carousel";

export default function Evidences(){
    return (
      <section className="Evidences">
        <h3 className="evi--title">
          VOCÊ AINDA NÃO ACREDITA QUE ISSO É POSSIVEL ?
        </h3>
        <p className="evi--descrip">
          Aqui está relatos de nossos alunos falando sobre o nosso
          revolucionario metodo
        </p>

        <Carousel></Carousel>

        <p className="promo">
          Agora que você acredita, não perca a oportunidade que pode mudar a sua
          vida logo a nossa PROMOÇÃO ira se esgotar, não deixe passar !
        </p>
        <a href="https://pay.kiwify.com.br/C1yRO1y">
            <div className="button--cta">
                <p>MUDE A SUA VIDA POR MENOS DE 0,84 CENTAVOS POR DIA</p> 
            </div>
        </a>
        <p className="security">TODA A TRANSAÇÃO É TOTALMENTE SEGURA 🔒</p>
      </section>
    );
}