import React from 'react'
import { useState, useEffect, createContext } from 'react'
import './store.scss'
import Product from '../Product/Product'
import NewProduct from '../NewProduct/NewProduct'
import axios from 'axios'
import  New  from '../New/New';

// const ItemContext = createContext();


// const TextContainer = createContext();


const Store = (props) => {



  let text = 'First <br> second <br /> third <br /> last<br />';
  // console.log(props)
  const [products, setProducts] = useState([]);
  const [delProduct, setDelProducts] = useState('');
  const [btnNewGood, setBtnNewGood] = useState(false);
  const [btnCorrect, setBtnCorrect] = useState(false);
  const [btnRemove, setBtnRemove] = useState(false);

  const [correctModal, setCorrectModal] = useState(false);
  const openCorrectModal = correctModal ? 'display' : 'hide';

  const baseUrl = 'http://localhost:3000/data';


  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      setProducts(res.data)
      setDelProducts(res.data)
      // console.log(res.data)
    })
  }, [])

  const chooseItem = (id) => {
    setBtnCorrect(false);
    setBtnRemove(false);
    setBtnNewGood(false);
    const newArr = products.map((item) =>
      item.id === id ? { ...item, active: true } : { ...item, active: false }
    )
    setProducts(newArr);


  }

  const addDisabledBtnCorrect = (add) => {
    setBtnCorrect(add);
  }

  const addDisabledBtnRemove = (add) => {
    setBtnRemove(add);
  }

  const removeProduct = (e, item) => {
    e.stopPropagation();
    let btnRemove = window.confirm('Удалить товар?')
    if (btnRemove) {
      setProducts(products.filter((p) => p.id !== item.id))
      // console.log(products);
    }
  }




  return (
    // <TextContainer.Provider value={text}>
    <div className={'products'}  >
      <div className={'products'}>
        {products.map((item) => (
          <Product
            setProducts={setProducts}
            item={item}
            key={item.id}
            products={products}
            chooseItem={chooseItem}
            setBtnNewGood={setBtnNewGood}
            setBtnCorrect={setBtnCorrect}
            setBtnRemove={setBtnRemove}
            btnCorrect={btnCorrect}
            addDisabledBtnCorrect={addDisabledBtnCorrect}
            addDisabledBtnRemove={addDisabledBtnRemove}
            btnRemove={btnRemove}
            removeProduct={removeProduct}
            correctModal={correctModal}
            setCorrectModal={setCorrectModal}
            onProductItem={props.onProductItem}
          />
        ))}
      </div>

      <NewProduct btnNewGood={btnNewGood} />
      {/* <div className={openCorrectModal}>
        <ModalCorrect setProducts={setProducts} setGoodName={setGoodName} goodName={goodName} price={price} products={products} count={count} setCorrectModal={setCorrectModal}  setBtnNewGood={setBtnNewGood} setBtnCorrect={setBtnCorrect} setBtnRemove={setBtnRemove}  />
      </div> */}
      {/* <New/> */}
    </div>
    // </TextContainer.Provider>
  )
}

export default Store
