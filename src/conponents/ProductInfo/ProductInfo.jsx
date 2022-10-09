import React, {useContext} from 'react';
import classes from './ProductInfo.module.css'
import {PostContext} from "../../Pages/Products";
import Button from "../Button/button";
import {v4 as uuid4} from 'uuid'

const ProductInfo = ({post}) => {



    const {productOptions, setProductOptions, cartItems, setCartItems, setModalvisible} = useContext(PostContext);

    const AddToCart = () => {

        if (productOptions === '') {

            return
        }

        const selectedSize = post.size.filter(item => item.value === productOptions)[0]
        const CartItemID =  uuid4();

        setCartItems(cartItems ? [...cartItems, {...post,selectedSize,CartItemID}] : [{...post,selectedSize,CartItemID}]);
        setProductOptions('');
        setModalvisible(false)

    }

    const pricevalue = post ? (post.price).toFixed(2).replace('.', ',') : undefined;

    return (
        post &&

        <div className={classes.modalProduct}>
            <div className={classes.image_container}>
                <img className={classes.productInfo_container} src={post.imageLink}/>

            </div>
            <div className={classes.modalInfo}>
                <div className={classes.modalText}>
                    <h3 className={classes.modalTitle}>{post.title}</h3>
                    <p>{`${pricevalue} PLN`}</p>
                    <h3>Material: </h3>
                    <p>{post.material}</p>
                    <h3>Size: </h3>
                    <select value={productOptions} onChange={e => setProductOptions(e.target.value)}
                            className={productOptions === '' ? [classes.selectSize, classes.isActive].join(' ') : classes.selectSize}>
                        <option disabled value={''}>{'Select your size'}</option>
                        {post.size.map((size) =>
                            <option key={size.value} disabled={size.isDisabled} value={size.value}>{size.name}</option>
                        )}
                    </select>
                </div>

                <Button onClick={AddToCart} className={classes.btn_modalProduct}>Add to cart</Button>


            </div>

        </div>


    );
};

export default ProductInfo;