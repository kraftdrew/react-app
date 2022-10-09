import React, {useContext} from 'react';
import classes from './search.module.css'
import MyInput from "../Input/input";
import searchImage from '../../assets/search.svg';
import {PostContext} from "../../Pages/Products";


const Search = ({placeholder, value, filter}) => {

    const {setFilter} = useContext(PostContext);

    return (
        <div className={classes.search_wrapper}>
            <img src={searchImage} className={classes.search_logo}/>
            <MyInput className={classes.search_input} onChange={e => setFilter({...filter, query: e.target.value})}
                     placeholder={placeholder} value={value}>

            </MyInput>
        </div>
    );
};

export default Search;