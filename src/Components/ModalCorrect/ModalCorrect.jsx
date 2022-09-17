import React from 'react';
import styles from './modalCorrect.module.scss'
const ModalCorrect = (props) => {
    // console.log(props)
    return (
        <div className={styles.modal} >
            {props.item.nameGood}
        </div>
    );
};

export default ModalCorrect;