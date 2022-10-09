import React from 'react';
import classes from './button.module.css'

const Button = ({children, setActualPage,className, ...props}) => {
    return (
            <button className={[classes['btn_main'],className].join(' ')} {...props} >
                {children}
            </button>
    );

};

export default Button;