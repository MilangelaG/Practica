import React from 'react'
import { useState, useEffect } from "react";

const SegundoEjercicio = () => {
  useEffect(() => {
    let calificacion = 0 
    var resultado = ""
    while (calificacion <= 10) {
      calificacion = prompt("Indica una calificación")
      if (calificacion >= 0 && calificacion <= 3){
        resultado = "Muy deficiente"
      }

      else if (calificacion >= 4 && calificacion <= 5) {
        resultado = "Insuficiente"
      }

      else if (calificacion >= 6 && calificacion <= 7) {
        resultado = "Suficiente"
      }

      else if (calificacion >= 8 && calificacion <= 9) {
        resultado = "Bien"
      }

      alert(resultado)
  }
    
    

  }, []);
  return (
    <div>
        <h1>SegundoEjercicio</h1>
    </div>
  )
}

export default SegundoEjercicio