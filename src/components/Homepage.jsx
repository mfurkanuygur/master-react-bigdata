import { useEffect, useState } from "react"
import getApiData, { getAllProducts } from "../request/request"
import { Link } from "react-router-dom"
import Loading from "./Loading"

const Homepage = ({ pokemons, setPokemons }) => {
    const [products, setProducts] = useState()
    const [count, setCount] = useState(8)
    const [bottom, setBottom] = useState(false); // En altta mı kontrolü
    // useEffect(() => {
    //     !pokemons &&
    //         getApiData().then(items => {
    //             setPokemons(items.sort((a, b) => {
    //                 return a.id - b.id;
    //             }));
    //         })
    // }, [])
    useEffect(() => {
        getAllProducts().then(data => {
            // setPokemons(items.sort((a, b) => {
            //     return a.id - b.id;
            // }));
            setProducts(data)
        })
    }, [])


    const handleClick = () => {
        setCount(count + 8)
        console.log(count)
    }

    return (
        <div className="homepage">
            <h1>All Products: {products?.length}</h1>
            <div className="container">
                {
                    products &&
                    products?.slice(0, count).map(product => (
                        <div key={product.id} className="pokemon-card">
                            <div className="pokemon-img"><img src={product?.image} alt={product?.title} /></div>
                            <h3>{product.title}</h3>
                        </div>
                    ))
                    || <Loading />
                }
            </div>
            <button onClick={() => handleClick()}>see more</button>
            {/* <h1>Pokemons</h1>
            <div className="container">
                {
                    pokemons?.map((pokemon, index) => (
                        <Link to={pokemon?.name} key={index}>
                            <div className="pokemon-card">
                                <div className="pokemon-img">
                                  
                                    <img src={pokemon?.sprites?.other?.["official-artwork"]?.front_default} />


                                </div>
                                <div className="pokemon-title">
                                    <p>{pokemon?.name}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div> */}
        </div>
    )
}

export default Homepage