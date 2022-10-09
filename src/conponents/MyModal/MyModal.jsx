import React, {useContext} from 'react';
import cl from '../MyModal/mymodal.module.css'
import close_img from '../../assets/close_button.png'

import {PostContext} from "../../Pages/Products";

const MyModal = ({children, setModalvisible, modalvisible}) => {

    const {setProductOptions} = useContext(PostContext)

    const rootclases = [cl.myModal]

    if (modalvisible) {
        rootclases.push(cl.active)
    }
    const result = rootclases.join(' ')

    return (
        <div className={result} onClick={() => {setModalvisible(false);setProductOptions('')}}>
            <div className={cl.modalContent} onClick={e => e.stopPropagation()}>
                <div className={cl.closeModal} onClick={() => {setModalvisible(false);setProductOptions('')}}>
                    <img src={close_img} />
                </div>

                <div className={cl.modalChildren}>
                    {children}
                </div>
            </div>

        </div>
    );
};

export default MyModal;