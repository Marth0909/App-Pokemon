
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import { useEffect, useRef, useState } from 'react'
import PokeCard from '../components/PokedexPage/PokeCard'
import SelectType from '../components/PokedexPage/SelectType'
import './PokedexPage.css'

const PokedexPage = () => {

const [inputValue, setInputValue] = useState('')
const [typeSelect, setTypeSelect] = useState('allPokemons')



//para traernos la información del trainer
const trainerName = useSelector(states => states.trainer)

const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
const [ pokemons, getPokemons, getTypePokemon ] = useFetch(url)
  useEffect(() => {
    if(typeSelect === 'allPokemons') { //si typeSelect es igual a allPokemons hacemos la peticion tradicional donde se muestren todos
      getPokemons()
    } else { //sino hacemos la peticion para que se muestren solo los que correspondan al tipo seleccionado por el usuario
      getTypePokemon(typeSelect)
    }
    
  }, [typeSelect])
  
  const inputName = useRef()

  const handleSeacrh = e => {
    e.preventDefault()
    setInputValue(inputName.current.value.trim().toLowerCase())
  }
 

  const cbFilter = (pokeInfo) => pokeInfo.name.toLowerCase().includes(inputValue)

 
  return (
    <>
    <header className='pokedex__header-container'>
    <div className='pokedex__header-red'></div>
     <div className='pokedex__header-black'></div>
     <img className='pokedex__logoheader' src="./src/assets/img/pokedexlogo.png" alt="Pokedex Logo" />
     <div className='pokedex__header-circlecontainer'>
        <div className='pokedex__header-circleE'>
          <div className='pokedex__header-circleI'></div>
        </div>
      </div>
    </header>
    
    <div className='pokedex__info'>
      <h2 className='pokedex__welcome-pok' ><span className='pokedex__welcome'>Your welcome</span> <span className='pokedex__welcome'>{trainerName},</span> here you can find your favorite Pokemon</h2>
      <form className='pokedex__form' onSubmit={handleSeacrh}>
        <input className='pokedex__name-pokemon' ref={inputName} type="text" placeholder="Write name pokemon..." />
        <button className='pokedex__button-search'>Search</button>
      </form>
      <SelectType setTypeSelect={setTypeSelect} />
      <div className="pokedex__card-container">
      {
        pokemons?.results.filter(cbFilter).map( pokeInfo => (
          <PokeCard
          key={pokeInfo.url}
          url={pokeInfo.url}
          />
        ))
      }
      </div>
    </div>
    </>
  )
}

export default PokedexPage

//con el método filter se hizo el filtro de búsqueda por Nombre del pokemon