import React, {useContext} from 'react';
import {PostContext} from "../../Pages/Products";
import classes from './SortProducts.module.css'

const SortProducts = ({options,default_value,value,filter}) => {

    const {setFilter} = useContext(PostContext);

    return (
        <select className={classes.sort_select} value={value} onChange={e => setFilter({...filter,sort:e.target.value})}>
            <option disabled value={''}>{default_value}</option>
            {options.map((element) =>
                <option value={element.value} key={element.value} >
                    {element.text}
                </option>
            )}
        </select>
    );
};

export default SortProducts;