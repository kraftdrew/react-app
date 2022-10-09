import React from 'react';
import ProductItem from "../ProductItem/ProductItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import classes from './Postlist.module.css'



const ProductList = ({posts, title,delete_post}) => {

    if(!posts.length) {
      return  <h1 style={{textAlign: "center"}}>Posts not found</h1>
    }

    return (
        <div  >


            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>
            <TransitionGroup className={classes.posts_container} >
                {posts.map( (post,index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={300}
                        classNames="post"
                    >
                    <ProductItem delete_post={delete_post}  post={post} key={post.id} number={index+1} />
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    );
};

export default ProductList;