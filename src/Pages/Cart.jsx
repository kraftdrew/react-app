import React, {useContext} from 'react';
import classes from './styles_pages/cart.module.css'
import {CartContext} from "../App";
import Button from "../conponents/Button/button";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import CartItem from "../conponents/CartItem/CartItem";


const Cart = (props) => {

    const {cartItems, cartItemsCount,currency,RemoveFromCart} = useContext(CartContext)

    const totalCart = (cartItems.reduce((a, b) => a + b.price, 0)).toFixed(2).replace('.', ',')


    return (
        <div className={classes.cartItemsPage}>
            <div className={classes.cartItemsContainer}>
                <div className={classes.cartItems_header}>

                    <h3 style={{fontSize: "25px"}}>Cart </h3>
                    <div className={classes.cartItemsCount}>
                        {cartItemsCount + ' Items'}
                    </div>
                </div>
                <TransitionGroup className={classes.cartItems_itemsList}>

                    {cartItems.map((item) =>

                        <CSSTransition key={item.CartItemID} timeout={300} classNames={{
                            exit: classes['cartItem-exit'],
                            exitActive: classes.cartItem_exit_done
                        }}>
                            <CartItem item={item} RemoveFromCart={RemoveFromCart}/>

                        </CSSTransition>)}

                </TransitionGroup>

            </div>
            <div className={classes.cartSummaryContainer}>

                <div className={classes.cartSummaryItems}>

                    <div className={classes.cartSumTextContainer}>
                        <h3>Product price</h3>
                        <p>{totalCart} {currency}</p>
                    </div>

                    <div className={classes.cartSumTextContainer}>
                        <h3>Delivery price</h3>
                        <p>0,00 {currency}</p>
                    </div>


                    <hr className={classes.summary_cartLine}/>

                    <div className={classes.cartSumTextContainer}>
                        <h3 style={{fontSize:'20px'}} >Summary price</h3>
                        <p style={{fontSize:'15px'}} >{totalCart} {currency}</p>
                    </div>



                </div>
            </div>

        </div>

    );
};

export default Cart;