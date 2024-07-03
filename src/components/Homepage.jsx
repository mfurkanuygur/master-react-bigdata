import { useEffect, useState } from "react"
import getApiData, { getAllProducts } from "../request/request"
import { Link } from "react-router-dom"
import Loading from "./Loading"
import RenderProduct from "./RenderProduct"

const Homepage = () => {
    const [products, setProducts] = useState()
    const [count, setCount] = useState(10)

    useEffect(() => {
        getAllProducts().then(data => {
            setProducts(data)
        })
    }, [])


    const handleClick = () => {
        setCount(count + 10)
        console.log(count)
    }

    return (
        <div className="homepage">
            {/* <h1>All Products: {products?.length}</h1> */}
            <div className="container">
                {
                    products &&
                    products?.slice(0, count).map(product => (
                        <RenderProduct key={product.id} product={product} />
                    ))
                    || <Loading />
                }
            </div>
            <div className="see-more-container"><button className="see-more-button" onClick={() => handleClick()}>see more</button></div>
        </div>
    )
}

export default Homepage