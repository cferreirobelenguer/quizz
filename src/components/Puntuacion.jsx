import React from 'react'

export const Puntuacion=({puntuacion})=>{
    return(
        <div className="puntuacion_container">
            <div>
                <h3>Tu puntuación es<br/>{puntuacion}</h3>
            </div>
        </div>
    )
}