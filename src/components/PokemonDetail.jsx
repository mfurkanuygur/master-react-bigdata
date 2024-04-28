import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getApiData from "../request/request"

const PokemonDetail = ({ pokemons, setPokemons }) => {
    const { id } = useParams()
    const [pokemonDetail, setPokemonDetail] = useState()

    let myPokemon
    if (pokemons) {
        myPokemon = pokemons?.find(data => data.name == id)
    }
    else {
        myPokemon = pokemonDetail
    }

    useEffect(() => {
        !pokemons &&
            getApiData().then(data => {
                setPokemonDetail(data.find(poke => poke?.name == id))
                setPokemons(data.sort((a, b) => {
                    return a.id - b.id;
                }));
            })

    }, [])

    return (
        <div className="myPokemon">
            <div>
                {/* <img src={myPokemon?.sprites.other.dream_world.front_default} alt={myPokemon?.name} /> */}
                <img src={myPokemon?.sprites?.other?.["official-artwork"]?.front_default} alt={myPokemon?.name} />

            </div>
            <div className="myPokemon-body">
                <div>
                    <h5>no.{myPokemon?.id}</h5>
                    <h1>{myPokemon?.name}</h1>
                    <p>
                        types:
                        {
                            myPokemon?.types.map((data, i) => (
                                <span key={i}>{i > 0 ? ', ' : ''}{data.type.name}</span>
                            ))
                        }
                    </p>
                    <p>weight:{myPokemon?.weight}</p>
                    <p>height:{myPokemon?.height}</p>
                </div>
                <div className="myPokemon-specs">
                    <div>
                        <p>{myPokemon?.stats[0].stat.name}</p>
                        <p>{myPokemon?.stats[0].base_stat}</p>
                    </div>
                    <div>
                        <p>{myPokemon?.stats[1].stat.name}</p>
                        <p>{myPokemon?.stats[1].base_stat}</p>
                    </div>
                    <div>
                        <p>{myPokemon?.stats[2].stat.name}</p>
                        <p>{myPokemon?.stats[2].base_stat}</p>
                    </div>
                    <div>
                        <p>{myPokemon?.stats[3].stat.name}</p>
                        <p>{myPokemon?.stats[3].base_stat}</p>
                    </div>
                    <div>
                        <p>{myPokemon?.stats[4].stat.name}</p>
                        <p>{myPokemon?.stats[4].base_stat}</p>
                    </div>
                    <div>
                        <p>{myPokemon?.stats[5].stat.name}</p>
                        <p>{myPokemon?.stats[5].base_stat}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PokemonDetail