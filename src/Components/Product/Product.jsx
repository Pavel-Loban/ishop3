import React from 'react'
import { useState } from 'react'
import ModalCorrect from '../ModalCorrect/ModalCorrect'
import styles from './product.module.scss'

const Product = (props) => {
  const [active, setActive] = useState(true)
  const activeProduct = active ? 'border' : 'border active'
  const btn = document.getElementsByClassName(styles.btn_remove)
  const [modal, setModal] = useState(false)
  const openModal = modal ? styles.modal : styles.hide
  const [disabled, setDiseabled] = useState(false);
  const [modalCorrect, setModalCorrect] = useState(false)


  // console.log(props.item)

  const changeActiveTask = (e) => {
    // console.log(props.item)

    setActive((previousState) => !previousState)
    setModal((previousState) => !previousState)
  }

  const removeProduct = (item) => {
    setActive((previousState) => !previousState)
    setModal((previousState) => !previousState)
    let btnRemove = window.confirm('Удалить товар?')
    if (btnRemove) {
      props.setProducts(props.products.filter((p) => p.id !== item.id))
    }
  }

  const del = () => {

    setModal((previousState) => !previousState)
    // setActive((previousState) => !previousState)
  }

  return (
    <div className={styles.catalog__column}>
      {/* <div className={styles.item_catalog}> */}
      <div
        className={activeProduct + ' ' + styles.new}
        onClick={changeActiveTask}
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
          <button onClick={del} className={styles.btn_correct}>
            редактировать
          </button>
          <button disabled={disabled}
            className={styles.btn_remove}
            onClick={() => removeProduct(props.item)}
          >
            Удалить
          </button>
        </div>
      </div>
      {/* </div> */}
      <div className={openModal}>
        <div className={styles.body_modal}>
          <p>{props.item.nameGood} </p>
          <p>{props.item.price} </p>
          <p>шт:{props.item.count} </p>
        </div>
      </div>

      <div >
      {/* <ModalCorrect item={props.item} /> */}
      </div>

      {/* <div className={activeProduct + ' ' + styles.new}   onClick={changeActiveTask}></div> */}
    </div>
  )
}

export default Product
