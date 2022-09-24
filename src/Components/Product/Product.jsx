import React from 'react'
import { useState, useEffect } from 'react'
import styles from './product.module.scss'
import Button from '@mui/material/Button';

const Product = (props) => {
  const [active, setActive] = useState(false);

  const [modal, setModal] = useState(false);
  const openModal = modal ? styles.modal : styles.hide;

  const [modalCorrect, setModalCorrect] = useState(false);

  // console.log(props)

  const changeActiveTask = (e) => {
    e.stopPropagation();
    props.chooseItem(props.item.id);
  }

  useEffect(() => {
    if (props.item.active) {
      setModal(true)
    } else {
      setModal(false)
    }
  }, [props.products])


  const correctGood = (e) => {
    e.stopPropagation()
    props.addDisabledBtnCorrect(true);
    props.addDisabledBtnRemove(true);
    props.setBtnNewGood(true);
    if(!props.btnCorrect){
      console.log(props.item.id)
      props.setGoodName(props.item.nameGood);
      props.setPrice(props.item.price);
      props.setCount(props.item.count)
      props.setCorrectModal(true);
    }

  }

  return (
    <div className={styles.catalog__column}>
      <div
        style={{
          border: props.item.active ? '2px solid #5ca6ec' : 'none',
          boxShadow: props.item.active ? '10px 5px 5px #5ca6ec' : 'none',
          width: props.item.active ? '80%' : '100%'
        }}
        className={styles.new}
        onClick={(e) => changeActiveTask(e)}
      >
        <div className={styles.item_catalog__image + '' + styles._img}>
          <img
            className={styles.product_img}
            src={props.item.imgSrc}
            alt={props.item.nameGood}
          />
        </div>
        <div className={styles.item_catalog_content}>
          <div className={styles.content}>
            <div className={styles.item_catalog__link}>
              <h4 className={styles.item_catalog__title}>
                {props.item.nameGood}
              </h4>
            </div>
          </div>
        </div>
        <div className={styles.item_action}>
          <div className={styles.item_price}>
            <span className={styles.item_price + '' + styles.item_action_text}>
              {props.item.price}
            </span>
          </div>
          <div className={styles.item_info}>
            <p className={styles.item_catalog__title}>
              Количество шт: <span>{props.item.count}</span>
            </p>
          </div>

          <div className={styles.flex}>
          <Button variant="contained" size="small"
         disabled={props.btnCorrect} onClick={correctGood}
         >редактировать</Button>
         {/* <button disabled={props.btnCorrect} onClick={correctGood} className={styles.btn_correct}>
            редактировать
          </button> */}
          </div>

          <div className={styles.flex}>
          <Button variant="contained" size="small"
         disabled={props.btnRemove}
         onClick={(e) => props.removeProduct(e,props.item)}
         >удалить</Button>
         {/* <button
            disabled={props.btnRemove}
            className={styles.btn_remove}
            onClick={(e) => props.removeProduct(e, props.item)}
          >
            Удалить
          </button> */}
          </div>

        </div>
      </div>
      <div
        className={openModal}
      >
        <div className={styles.body_modal}>
          <p>{props.item.nameGood} </p>
          <p>{props.item.price} </p>
          <p>шт:{props.item.count} </p>
        </div>
      </div>
    </div>
  )
}

export default Product
