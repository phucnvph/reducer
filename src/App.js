import { useState, useReducer } from "react";

const initialState = [
  {
    id: 1,
    name: 'Sản phẩm 1',
  },
  {
    id: 2,
    name: 'Sản phẩm 222',
  }
];
const reducer = (state, action) => {
  console.log(state, action);

  let stateTam = [];

  switch (action.type) {
    case 'ADD':
      stateTam = [...state, action.payload];
      break;

    case 'EDIT':

      break;

    case 'DELETE':

      break;

    default:
      stateTam = state;
      break;
  }
  return stateTam;
};

function addProduct(pram) {
  return {
    type: 'ADD',
    payload: pram
  }
}

function App() {
  const [products, dispatch] = useReducer(reducer, initialState);

  const hanleAddProduct = () => {
    dispatch(addProduct({
      id: 3,
      name: 'Sản phẩm 3333',
    }));
  }

  return (
    <div className="App">
      <input />
      <button onClick={hanleAddProduct}>AddProduct</button>
      {products.map((product, index) => <li key={index}>{product.name} <button>&times;</button></li>)}
    </div>
  );
}

export default App;
