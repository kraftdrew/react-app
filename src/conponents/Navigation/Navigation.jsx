import React, {useContext, useMemo, useState} from 'react';
import {BrowserRouter, Link, Route, Routes, useLocation, useNavigate} from "react-router-dom";

import classes from './navigation.module.css';
import Button from "../Button/button";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import CartItem from "../CartItem/CartItem";
import {CartContext} from "../../App";
import CartItemMin from "../CartItemMin/CartItemMin";


const Navigation = () => {

    const {cartItems, RemoveFromCart} = useContext(CartContext)

    const navigate = useNavigate();

    const isCartEmpty = Object.keys(cartItems).length === 0

    const isPageCart = useLocation().pathname === '/cart'

    const [isHoverCartButton, seTisHoverCartButton] = useState(false)
    const [cartStyle, setCartStyle] = useState(classes.cartMin)
    const classActiveCart = [classes.cartMin, classes.active].join(' ');


    const [isVisible, setIsVisible] = useState(true)

    function HideNavBar() {

        if (document.documentElement.scrollTop > 50) {
            setIsVisible(false)

            if (!isPageCart && isHoverCartButton) {

                setCartStyle([classActiveCart, classes.cartMin_scroll].join(' '))

            } else {

                setCartStyle(classes.cartMin)
            }

        } else {
            setIsVisible(true)

            if (!isPageCart && isHoverCartButton) {

                setCartStyle(classActiveCart)
            } else {
                setCartStyle(classes.cartMin)
            }

        }


    }

    document.addEventListener('scroll', HideNavBar);
    const navClasses = isVisible ? classes.navbar : [classes.navbar, classes.navbar_hide].join(' ')

    useMemo(() => {
            !isPageCart && isHoverCartButton ? setCartStyle(classActiveCart) : setCartStyle(classes.cartMin)
            HideNavBar()
        }
        , [isHoverCartButton, isPageCart])

    return (
        <div className={navClasses}>
            <div className={classes.link_container}>
                <Link to='/products'>Products</Link>
                <div onMouseEnter={() => seTisHoverCartButton(true)}
                     onMouseLeave={() => seTisHoverCartButton(false)}
                     className={classes.cartButton_container}>

                    <Link to='/cart'>Cart</Link>
                </div>

                <div onMouseEnter={() => seTisHoverCartButton(true)}
                     onMouseLeave={() => seTisHoverCartButton(false)}
                     className={cartStyle}>
                    <div className={classes.cartMin_Container}>

                        <div className={classes.cartMin_items}>
                            <TransitionGroup className={'test'}>

                                {cartItems.map((item) =>

                                    <CSSTransition key={item.CartItemID} timeout={300} classNames={{
                                        exit: classes['cartItem-exit'],
                                        exitActive: classes.cartItem_exit_done
                                    }}>
                                        <CartItemMin item={item} RemoveFromCart={RemoveFromCart}/>

                                    </CSSTransition>)}

                            </TransitionGroup>
                        </div>
                        <div className={classes.cartMin_summary}>

                            { isCartEmpty
                            ? <div> Empty cart</div>
                            : <Button onClick={() => navigate('/cart')} className={classes.cartMin_Button}>Go to
                            cart</Button> }
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Navigation;