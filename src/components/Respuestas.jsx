import React from 'react'
import { preguntas } from '../preguntas/preguntas'

export const Respuestas=({pregunta,puntuacion,hayRepes,esCorrecto, setEsCorrecto, setHayRepes, setPuntuacion})=>{
    return(
        <div>
                                    {preguntas[pregunta].opciones.map((i)=>{
                                        return(
                                            
                                            <div className="respuestas" key={i.textoRespuesta}>
                                                <div>
                                                    
                                                    {i.textoRespuesta}
                                                </div>
                                                <div>
                                                    <button className={esCorrecto && i.isCorrect===true ? "btnCorrect":"buttonStyle"} id="btn" onClick={()=>{
                                                        if(i.isCorrect===true && hayRepes===false){
                                                            //queremos que sólo se puntúe una vez por pregunta cuando se pulsa en la opción correcta
                                                            setPuntuacion(puntuacion+1)
                                                            setHayRepes(true)
                                                            
                                                        }
                                                        if(i.isCorrect){
                                                            //queremos que el botón se muestre verde cuando se selecciona correctamente
                                                            setEsCorrecto(true)
                                                            
                                                        }
                                                        
                                                    }}>Seleccionar</button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
    )
}