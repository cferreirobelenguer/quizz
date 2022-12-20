import React,{useState, useEffect} from 'react'
import { Portada } from './Portada'
import { Puntuacion } from './Puntuacion'
//Se importan las preguntas del quizz
import { preguntas } from '../preguntas/preguntas'
import { Respuestas } from './Respuestas'
import { Resultados } from './Resultados'


//Componente hijo de Portada
export const Quizz=(props)=>{
    //Se inicializa el state con el valor heredado por props del componente padre Portada
    const [showReturn,setShowReturn]=useState(props.showQuizz)
    //state que mide la puntuación en función de respuestas correctas
    const [puntuacion, setPuntuacion]=useState(0)
    //state que sirve de indice para recorrer las preguntas
    const [pregunta, setPregunta]=useState(0)
    //state que sirve para mostrar los resultados
    const [showResults,setShowResults]=useState(false)
    //state que evita repeticiones al contar las puntuaciones
    const [hayRepes,setHayRepes]=useState(false)
    //state para controlar cuando se muestra correcto el botón de selection (verde ) 
    const [esCorrecto,setEsCorrecto]=useState(false)

    const volverMenu=()=>{
        //se cambia el state a false para volver al menú principal
        setShowReturn(false)
        console.log(props.showQuizz)
        console.log(showReturn)
    }
    const siguientePregunta=()=>{
        setPregunta(pregunta+1)
    }
    const modificarVariables=()=>{
        setHayRepes(false)
        setEsCorrecto(false)
        console.log(esCorrecto)
    }
    useEffect(()=>{
        modificarVariables()
        
    },[pregunta])
    return(
        showReturn?(
            <>
                <div className="container" id="quizz_container">
                    <div className="quizz_info">
                        <div className="quizz_title p-3">
                            <h1>Resuelve <br/> las preguntas</h1>
                        </div>
                        <div className="quizz_button p-3 m-2">
                            <button className="btn" id="buttonStyle" onClick={volverMenu}>Volver</button>
                        </div>
                    </div>
                    {showResults===false?(
                        <div className="quizz_container">
                            <div className="quizz_questions">Pregunta {pregunta+1}</div>
                            <div className="quiz_info">
                                <div>
                                    <h3>{preguntas[pregunta].titulo}</h3>
                                </div>
                                <Respuestas pregunta={pregunta} hayRepes={hayRepes} puntuacion={puntuacion} esCorrecto={esCorrecto} setEsCorrecto={setEsCorrecto} setHayRepes={setHayRepes} setPuntuacion={setPuntuacion}></Respuestas>
                            
                            </div>
                            {pregunta!=preguntas.length-1? (
                                <div className="quizz_button p-3 m-2">
                                    <button className="btn" id="buttonStyle" onClick={siguientePregunta}>Siguiente</button>
                                </div>
                            ):(
                                <Resultados setShowResults={setShowResults}></Resultados>
                            )}
                        
                        </div>
                        ):
                        (
                            //Se llama al componente puntuación para mostrar los resultados
                            <Puntuacion puntuacion={puntuacion}></Puntuacion>
                        )}
                
                    </div>
                
                </>
            ):
            (   
                <>
                    <Portada/>
                </>
        )
        
    )
}