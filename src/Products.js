import React from 'react';
import Product from "./Components/Product/Product";
import 'firebase/firestore'
import "bootswatch/dist/cosmo/bootstrap.min.css";
import Nav from "./Components/Nav/Nav"

function Products() {
    return (
        <div>
            <Nav></Nav>
            <div className="jumbotron">
		        <h1 className="display-4">Productos</h1>
	        </div>
            <div className="container p-4">
                <Product></Product>
            </div>
        </div>
    );
  }
  
  export default Products;