import React from 'react';

import Product from "./Components/Product/Product";

import 'firebase/firestore'

import "bootswatch/dist/cosmo/bootstrap.min.css";

function Products() {
    return (
        <div className="container p-4">
            <div className="row">
            <Product></Product>
            </div>
        </div>
    );
  }
  
  export default Products;