import React from 'react';
import { useState } from 'react';
import styles from './newProduct.module.scss'
const NewProduct = (props) => {

    // console.log(props)

    return (
        <div className={styles.new_product }>
            <button disabled={props.btnNewGood}  >Новый</button>
        </div>
    );
};

export default NewProduct;