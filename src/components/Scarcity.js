import React,{useState,useRef,useEffect} from "react";
import "../styles/Home.css";

export default function Scarcity(){
    const Ref = useRef(null);

    const [timer, setTimer] = useState('00:00:00');
  
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 * 60 * 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
  
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
  
  
    const clearTimer = (e) => { 
        setTimer('00:15:59');
  
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();

        deadline.setSeconds(deadline.getSeconds() + 59);
        deadline.setMinutes(deadline.getMinutes() + 35);
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
  
    return (
        <section className="Scarcity">
            <h3 className="scarcity--title">AGORA VOCÊ VAI TER QUE <span className="green">ESCOLHER</span>  !!!</h3>
            <h4 className="scarcity--subtitle">Infelizmente a nossa <span className="green">PROMOÇÃO</span> não pode durar para sempre ;(</h4>
            <h4 className="paragraf-one">Por isso precisamos que você tome logo essa decisão de mudar a sua vida</h4>
            <p className="rest-temp">Este é o tempo que falta</p>

            <div className="timer">
                <h2>{timer}</h2>
            </div>

            <p className="sideparagr--one">É a sua ultima chance de conseguir comprar algo que pode mudar a sua vida <br></br> pelo preço de uma pizza</p>
            <p className="sideparagr--second">APROVEITE A SUA ULTIMA CHANCE E TOME A DECISÃO CORRETA PARA O SEU FUTURO</p>
            <h4 className="initial--value"><del>R$ <span className="red">130,00</span></del></h4>
            <p className="scar">POR APENAS</p>
            <h3 className="final--value">R$ <span className="green">36,00</span></h3>
            <a href="https://pay.kiwify.com.br/C1yRO1y">
                <div className="button--cta">
                    <p>MUDE A SUA VIDA POR MENOS DE 0,84 CENTAVOS POR DIA</p> 
                </div>
            </a>
        </section>
    );
}