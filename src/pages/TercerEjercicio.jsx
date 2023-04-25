import React from 'react'
import { useState, useEffect } from "react";


const TercerEjercicio = () => {

  useEffect(() => {
    let supercadena = ""
    let cadena = ""
    
    while (cadena !== null) {
        cadena = prompt("Ingresa una cadena")
        if (cadena !== null){
            supercadena = supercadena + cadena
        }
        
    }
    alert (supercadena)     
  }, []);
  return (
    <div>
        
    </div>
  )
 
}

export default TercerEjercicio