import React, {useContext, useEffect, useState} from "react";
import "../styles/App.css"
import ProductList from "../conponents/ProductList/ProductList";
import Button from "../conponents/Button/button";
import Filter from "../conponents/Filter_component/filter";
import {UseFilteredPosts} from '../hooks/useSort'

import {CountPages} from '../utils/CountPages'
// import Pagination from "../conponents/Pagination/pagination";
import {ItemsData} from "../API/PostService";
import MyModal from "../conponents/MyModal/MyModal";
import ProductInfo from "../conponents/ProductInfo/ProductInfo";
import {CartContext} from "../App";
import {v4 as uuid4} from 'uuid' ;
import Pagination from '@mui/material/Pagination'


export const PostContext = React.createContext('')

function Products() {


    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({query: '', sort: ''})
    const [modalvisible, setModalvisible] = useState(false)
    const sortedList = UseFilteredPosts(posts, filter.sort, filter.query)
    const [isPostLoaded, setIsPostLoaded] = useState(false)

    // product added to cart {id,size}
    const {cartItems, setCartItems} = useContext(CartContext);


    // Grab id of clicked product to render modal
    const [idproductClicked, setIdproductClicked] = useState();

    // selected value of size
    const [productOptions, setProductOptions] = useState('');

    // limits and page number for DB request
    const [postsLimit, setPostsLimit] = useState(15);

    // Count of pages to draw
    const [pagesCount, setPagesCount] = useState(0);
    const [actualPage, setActualPage] = useState(1);
    const pagesCountArr = []


    const CalculateContent = (posts, limit, page) => {

        if (page === 1) {
            posts.slice(0, limit)
        }

        const start = limit * page - limit
        const end = limit * page;

        return posts.slice(start, end)


    }


    async function fetchPosts() {

        setIsPostLoaded(false)

        const response1 = ItemsData
        const response2 = response1.map((element) => {
                return {...element, id: uuid4()}
            }
        )
        const response = [...response1, ...response2]

        const result = CalculateContent(response, postsLimit, actualPage)

        setPosts(result)
        setIsPostLoaded(true)
        const totalCount = Object.keys(response).length
        setPagesCount(CountPages(totalCount, postsLimit))

    }

    for (let i = 0; i < pagesCount; i++) {
        pagesCountArr.push(i + 1)
    }


    useEffect(() => {
        fetchPosts()
    }, [actualPage])


    const DeletePost = (posts_toDelete, e) => {
        let result = posts.filter(e => e.id !== posts_toDelete.id)
        setPosts(result);
        e.stopPropagation();

    };

    const TextFunction = () => {
        console.log(pagesCount);
    }

    return (

        <PostContext.Provider
            value={{
                setFilter,
                setModalvisible,
                modalvisible,
                setIdproductClicked,
                productOptions,
                setProductOptions,
                cartItems,
                setCartItems
            }}>

            <div className="App">


                <MyModal setModalvisible={setModalvisible} modalvisible={modalvisible}>
                    <ProductInfo post={idproductClicked}/>
                </MyModal>

                <Button onClick={TextFunction}>Console.log</Button>
                <hr/>

                <Filter filter={filter}/>
                {isPostLoaded
                    ? <div>
                        <ProductList delete_post={DeletePost} posts={sortedList} key={posts.id}
                                     title="Products list"/>
                        <Pagination count={pagesCountć} page={actualPage} variant="outlined" onChange={(e,value) => setActualPage(value) } />

                    </div>

                    : <h1 style={{textAlign: 'center'}}>Is loading</h1>
                }

            </div>
        </PostContext.Provider>

    );
}

export default Products;
