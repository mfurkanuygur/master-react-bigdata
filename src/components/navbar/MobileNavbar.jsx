import React from 'react'
import home from '../../assets/home.png'
import product from '../../assets/product.png'
import info from '../../assets/info.png'
import contact from '../../assets/contact.png'
const MobileNavbar = () => {

    return (
        <header className="mobile-header">
            <h1 className='mobile-logo'>Master Store</h1>
            <nav className="mobile-nav">
                <a href="#" className='page-link'>
                    <img src={home} alt="home" className='page-link-logo'/>
                    <p  className='page-link-title'>home</p>
                </a>
                <a href="#" className='page-link'>
                    <img src={product} alt="product" className='page-link-logo'/>
                    <p className='page-link-title'>product</p>
                </a>
                <div href="#" className='page-link'>
                    <img src={info} alt="info" className='page-link-logo' />
                    <p className='page-link-title'>About</p>
                </div>
                <a href="#" className='page-link'>
                    <img src={contact} alt="contact"className='page-link-logo' />
                    <p className='page-link-title'>contact</p>
                </a>
            </nav>
        </header>
    )
}

export default MobileNavbar