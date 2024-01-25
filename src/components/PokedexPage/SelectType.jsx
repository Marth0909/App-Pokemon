import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/SelectType.css'

//para hacer la peticion a la API usamos el hook useFetch

const SelectType = ({ setTypeSelect }) => {

const url = 'https://pokeapi.co/api/v2/type'    
const [types, getTypes] = useFetch(url)

useEffect(() => {
 getTypes()
}, [])

const typeRef = useRef()

const handleChange = () => {
    setTypeSelect(typeRef.current.value)
}

  return (
    <div className='select__container'>
    <select className='selectype__select' ref={typeRef} onChange={handleChange}>
        <option className='select__options' vaalue='selecttype__allPokemons'>All Pokemons</option>
      {
        types?.results.map( typeInfo =>  (
            <option className='select__options2' key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
        ))
      } 
        
    </select>
    </div>
  )
}

export default SelectType