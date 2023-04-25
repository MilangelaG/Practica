import React from 'react'
import { useState, useEffect } from "react";

const CuartoEjercicio = () => {
    useEffect(() => {
    let supercadena = 0
    let numero = ""
            
    while (numero !== null) {
        numero = prompt("Ingresa un número")
        
        if (Number(numero) == numero){
            numero = Number(numero)
            supercadena = supercadena + numero
        }
        else {
            alert ("No es un numero")
        }
    }
    alert (supercadena)     

    }, []);
  return (
    <div>CuartoEjercicio</div>
  )
}

export default CuartoEjercicio