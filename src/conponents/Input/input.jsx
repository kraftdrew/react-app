import React from 'react';
import styles from '../Input/input.css'

const MyInput = React.forwardRef((props,ref) => {
    return (
            <input  ref={ref} className={styles.myInput} {...props}/>
    );
});

export default MyInput;