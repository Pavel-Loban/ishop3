
import React from "react";
import './App.scss';

import NewProduct from "./Components/NewProduct/NewProduct";
import Header from "./Components/Header/Header";
import Store from "./Components/Store/Store";
import { Container } from "@mui/system";




function App() {



  return (
    <>
      <Header />
      <Container
      sx={{mt: '1rem'}}
      >
        {/* <div className="App"> */}

          <h1 className={'title'} >Каталог товаров</h1>
          <Store />
          {/* <NewProduct dis={props.btnNewGood} /> */}
          {/* <MaterialButton title={'Редактировать'} /> */}
        {/* </div> */}
      </Container>

    </>
  );

}

export default App;
