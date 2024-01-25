import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    //se hará logica para que se muestra pokedexpage o homepage
    
    const trainer = useSelector(states => states.trainer) 
    
    if(trainer.length >= 3) {
        return <Outlet/> //renderiza componentes hijos
    } else {
        return <Navigate to='/'/>//si el nombre del trainer no cumple con la condición de tener al menos 3 caracteres, te redirige a la homepage
    }
  
}

export default ProtectedRoutes