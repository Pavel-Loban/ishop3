
import React, { useState} from "react";
import './App.scss';

import NewProduct from "./Components/NewProduct/NewProduct";
import Header from "./Components/Header/Header";
import { Container } from "@mui/system";
import Store from "./Components/Store/Store";


function App() {



  const [oneProduct, setOneProduct] = useState(3)
  const onProductItem = (id) => {
    setOneProduct(id)
    console.log(id)
  }


  return (

    <div>
      <Header />
      <Container
      sx={{mt: '1rem'}}
      >
        <div className="App">

          <h1 className={'title'} >Каталог товаров</h1>
          <Store  onProductItem={onProductItem}/>
          {/* <NewProduct dis={props.btnNewGood} /> */}
          {/* <MaterialButton title={'Редактировать'} /> */}
        </div>
      </Container>

    </div>

  );

}

export default App;
