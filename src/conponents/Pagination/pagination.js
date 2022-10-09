import React from 'react';
import Button from "../Button/button";
import classes from '../Button/button.module.css'

const Pagination = ({pagesCountArr,actualPage,setActualPage}) => {
    return (
        <div>
            {pagesCountArr.map((e) =>
                <Button className={[e === actualPage ? 'button_isActive' : '',classes['btn_main'],classes['btn_pagination']].join(' ')} onClick={() => {
                    setActualPage(e);
                }}
                        key={e}>{e}</Button>
            )}
        </div>
    );
};

export default Pagination;