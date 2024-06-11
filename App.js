import React from 'react';
import Main from './src/main/Main';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { StatusBar } from 'react-native';
import BarraNavegacion from './src/barraNavegacion/barraNavegacion';
import DetallesInformacion from './src/detallesInformacion/detallesInformacion';
import Calculadora from './src/calculadora/calculadora';

export default function App() {

  function devolverValores(valor){
      const { id } = valor;
      return id;
  }

  return (
      <NativeRouter>
        <BarraNavegacion/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/informacion/:id' element={<DetallesInformacion/>}/>
          <Route path='/calculadora' element={<Calculadora/>}/>
        </Routes>
        <StatusBar hidden/>
      </NativeRouter>
  )
}