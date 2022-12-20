import React from 'react'

export const Resultados=({setShowResults})=>{
    return(
        <div>
            <button id="buttonStyle" onClick={()=>{
                setShowResults(true)
            }}>Ver resultados</button>
        </div>
    )
}