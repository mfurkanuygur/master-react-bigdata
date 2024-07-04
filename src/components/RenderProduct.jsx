
import addcart from '../assets/addcart.png'
import favorite from '../assets/favorite.png'

const RenderProduct = ({ product }) => {
    return (
        <div key={product?.id} className="product-card">
            <div className="product-img">
                <img src={product?.image} alt={product?.title} />
            </div>
           <div className='product-body'>
                <h3 className="product-title">{product?.title}</h3>
                <div className="product-subtitle">
                    <p className="product-price">${product?.price}</p>
                    <p className="product-cat">{product?.category}</p>
                </div>
                <div className="buttons">
                    <button className="product-button">
                        <img src={addcart} alt="addcart" />
                    </button>
                    <button className="product-button">
                        <img src={favorite} alt="favorite" />
                    </button>
                </div>
           </div>
        </div>
    )
}

export default RenderProduct