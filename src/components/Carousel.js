import React,{useState,useEffect} from "react";
import "../styles/Home.css";

import Esquerda from "../imgs/buttons-carousel/esquerda.png"
import Direita from "../imgs/buttons-carousel/direita.png"

import ev1 from "../imgs/evidences/ev-1.png"
import ev2 from "../imgs/evidences/ev-2.png"
import ev3 from "../imgs/evidences/ev-3.png"
let cont = 0;

export default function Carousel(){
    const [Img,setImg] = useState();

    useEffect(() => {
      setImg(ev1)
    },[]);

    const imgs = [ev1,ev2,ev3]  

    const prevImg = ()=>{
        if(cont>0){
            cont = cont - 1
            setImg(imgs[cont])    
        } 
        console.log(cont)
      }

    const nextImg = ()=>{
      if(cont < 2){
        cont++
        setImg(imgs[cont])
        
      }    
      console.log(cont)
    }
    return(
        <>
            <img src={Esquerda} onClick={prevImg} className="Esquerda"></img>
            <div className="container-img" id="imgs">
                <div className="carrosel">
                    <img src={Img} alt="evidence" className="img"></img>
                </div>
            </div>  
            <img src={Direita} onClick={nextImg} className="Direita"></img>
        </>
    )
}