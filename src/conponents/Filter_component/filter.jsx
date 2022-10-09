import React from 'react';
import SortProducts from "../SortProducts/SortProducts";
import classes from './filter.module.css'
import Search from "../Search/Search";

const Filter = ({filter}) => {
    return (
        <div  className={classes.filter_wrapper} >
            <Search placeholder={"Search"} filter={filter} value={filter.query} />
            <SortProducts default_value={'Sort'}
                          options={[{value: 'title', text: 'Sort by title'},
                            {value: 'price', text: 'Sort by price'}
                        ]}
                          value={filter.sort}
                          filter={filter}
            />
        </div>
    );
};

export default Filter;