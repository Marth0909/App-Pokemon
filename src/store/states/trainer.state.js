import { createSlice } from "@reduxjs/toolkit";

//Para crear estado global
const trainerSlice = createSlice({
name: 'trainer',
initialState: '',
reducers: {
setTrainerG:(state, action) => action.payload
}
//los reducer contienen las actions que son para cambiar el valor de nuestro estado global
})

export const { setTrainerG } = trainerSlice.actions //se exportan las actions, la cuales tiene la estructura de datos de: Objeto
export default trainerSlice.reducer //representa a lestado global y se va guardar en el Store

