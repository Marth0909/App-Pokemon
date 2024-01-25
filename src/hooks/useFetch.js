import axios from "axios"
import { useState } from "react"


const useFetch = (url) => {
 const [response, setResponse] = useState()
//peticion de todos los pokemones
const getApi = () => {
    axios.get(url)
    .then(resp => setResponse(resp.data))
    .catch(error => console.log(error))
}

//se va hacer una petición diferenciadora, para filtrar por tipo
const getTypePokemon = (urlType) => {
    axios.get(urlType)
    .then(resp => {
        const obj = {
            results: resp.data.pokemon.map(pokeInfo => pokeInfo.pokemon)
        }
        setResponse(obj)
    })
    .catch(error => console.log(error))
}
    return[ response, getApi, getTypePokemon ]
}

export default useFetch