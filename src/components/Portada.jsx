import React,{useState} from 'react'
import navidad from '../assets/images/navidad.jpg'
import { Quizz } from './Quizz'

export const Portada=()=>{
    const [showQuizz,setShowQuizz]=useState(false)


    const mostrarQuiz=()=>{
        //Al pulsar jugar cambia la variable showQuiz para pasar a llamar al componente hijo Quizz
        setShowQuizz(true)
        console.log(showQuizz)
    }
    return(
        showQuizz?(
            <div>
                <Quizz showQuizz={showQuizz}></Quizz>
            </div>
        ):(
            <div>
                <div className="container-fluid" id="portada_container">
                    <div className="portada_info">
                        <div className="portada_title p-3">
                            <h1>Juego<br></br>de Navidad</h1>
                        </div>
                    <div className="portada_button p-3 m-2">
                        <button className="btn" id="buttonStyle" onClick={mostrarQuiz}>Jugar</button>
                    </div>
                </div>
            
                <div className="portada_imagen">
                    <img src={navidad} className="img-fluid" width="500" heigth="500" alt="portada"/>
                </div>
                </div>
            </div>
        )
        
    )
}