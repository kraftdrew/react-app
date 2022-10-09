import React, {useContext} from 'react';
import Button from "../Button/button";
import classes from './ProductItem.module.css'
import {PostContext} from "../../Pages/Products";



const ProductItem = ({post, ...props}) => {

    const {setModalvisible, setIdproductClicked} = useContext(PostContext);

    const OpenModal = () => {

        setIdproductClicked(post)
        setModalvisible(true)
    }


    return (

        <div onClick={() => OpenModal()} className={classes.post}>

                <div className={classes.image_container}>
                    <img  src={post.imageLink}/>
                </div>

            <div className={classes.post__content}>
                <p><strong>{post.title}</strong></p>
                <p>{post.price.toFixed(2).replace('.', ',')} PLN</p>
            </div>

            <div className={classes.btn_container}>
                <Button className={classes.post_btns}>
                    Add to cart
                </Button>
            </div>


        </div>

    );
};

export default ProductItem;