import React from "react";
import './App.scss';
import NewProduct from "./Components/NewProduct/NewProduct";

import Store from "./Components/Store/Store";




function App() {



  return (
    <div className="App">
      <h1 className={'title'} >Каталог товаров</h1>
    <Store />
    <NewProduct/>

    </div>
  );

}

export default App;
