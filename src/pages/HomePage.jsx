import React, { useRef } from 'react'
import { setTrainerG } from '../store/states/trainer.state'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './HomePage.css'


const HomePage = () => {

const inputTrainer = useRef()

const dispatch = useDispatch()

const navigate = useNavigate()

const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerG(inputTrainer.current.value.trim()))//se guarda información en estado global setTrainerG
    navigate('/pokedex') //para navegar hacia ruta pokedex en caso de que se cumpla condicion linea 10 del componente ProtectedRoutes
}

  return (
    <>
    <div className='pokedex__inf'>
        <img className='pokedex__logohome' src="process.env.PUBLIC_URL/img/pokedexlogo.png" alt="Pokedex Logo" />
        <h2 className='pokedex__trainer'>Hi trainer your welcome!</h2>
        <p className='pokedex__welcome'>To start this app, give me your trainer name</p>
        <form className='pokedex__form' onSubmit={handleSubmit}>
            <input className='pokedex__input' ref={inputTrainer} type="text" placeholder="Write your name..." /> 
            <button className='pokedex__boton'>Catch them all</button>
        </form>
    </div>
    <footer className='pokedex__footer-container'>
     <div className='pokedex__footer-red'></div>
     <div className='pokedex__footer-black'></div>
     <div className='pokedex__footer-circlecontainer'>
        <div className='pokedex__footer-circleE'>
          <div className='pokedex__footer-circleI'></div>
        </div>
      </div>
    </footer>
 </>
  )
}

export default HomePage

//en el input se necesita capturar la informació y guardarla en un estado global
//con useRef para capturar el input, el evento onSubmit
//el preventDefault evita que se recargue la página en automático