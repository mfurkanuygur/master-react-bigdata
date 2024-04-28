import { useRoutes } from 'react-router-dom'
import Homepage from '../components/Homepage'
import PokemonDetail from '../components/PokemonDetail'
import { useState } from 'react'


const Router = () => {
    const [pokemons, setPokemons] = useState()

    const routes = useRoutes([
        { path: "/", element: <Homepage pokemons={pokemons} setPokemons={setPokemons} /> },
        { path: `/:id`, element: <PokemonDetail pokemons={pokemons} setPokemons={setPokemons} /> }
    ])
    return routes
}

export default Router