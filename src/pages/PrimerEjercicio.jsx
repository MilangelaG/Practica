import React from 'react'
import { useState, useEffect } from "react";


const PrimerEjercicio = () => {
  useEffect(() => {
    let respuesta = prompt("Indica tu edad pinche wero") 
    var wacho = ""
    if (respuesta >= 18) {
      wacho = "tienes licencia";
    }
    else {
      wacho ="no tienes licencia";
    }

    alert(wacho) 
  }, []);

  return (
    <div>
    </div>
  )
}

export default PrimerEjercicio
