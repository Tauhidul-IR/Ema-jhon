import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;

    //event hander
    const { handleAddToCart } = props

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3 className='name'>{name}</h3>
            <h4 className='price'>Price :$ {price}</h4>
            <p className='seller'>Manufacturer : {seller}</p>
            <p className='rating'>Rating :{ratings}</p>
            <button onClick={() => handleAddToCart(props.product)} className='button'>
                <p> Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;