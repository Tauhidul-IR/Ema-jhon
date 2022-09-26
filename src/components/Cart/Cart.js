import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h4>order sammary</h4>
            <p>item : {props.cart.length}</p>
        </div>
    );
};

export default Cart;