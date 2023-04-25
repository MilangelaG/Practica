import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrimerEjercicio from './pages/PrimerEjercicio';
import SegundoEjercicio from './pages/SegundoEjercicio';
import NotFound from './pages/NotFound';
import TercerEjercicio from './pages/TercerEjercicio';
import CuartoEjercicio from './pages/CuartoEjercicio';
import QuintoEjercicio from './pages/QuintoEjercicio';

const App = () => {

  return (
    <div className='hey'>
      <Routes>
        <Route path="ejercicio1" element={<PrimerEjercicio />} />
        <Route path="ejercicio2" element={<SegundoEjercicio />} />
        <Route path="ejercicio3" element={<TercerEjercicio />} />
        <Route path="ejercicio4" element={<CuartoEjercicio />} />
        <Route path="ejercicio5" element={<QuintoEjercicio />} />


        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
