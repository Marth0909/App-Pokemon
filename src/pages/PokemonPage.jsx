import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const PokemonPage = () => {

  const { id } = useParams()

  const url =  `https://pokeapi.co/api/v2/pokemon/${id}`
  //en clase solo se despliega imagen y nombre pero falta desplegar lo demas
  const [pokemon, getPokemon] = useFetch(url)

  useEffect(() => {
   getPokemon()
  }, [])
  
  console.log(pokemon);
  return (
    <div>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      <h2>{pokemon?.name}</h2>
    </div>
  )
}

export default PokemonPage