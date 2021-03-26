import React from 'react';
import ProductForm from "../ProductForm/ProductForm";

import { db } from "../../App";

function Product() {

    const Task = async (productObject) =>{
        await db.collection('Products').doc().set(productObject);
        console.log('New task added')
    }

    return (
        <div>
            <ProductForm Task={Task}></ProductForm>
            <h1>Product</h1>
        </div>
    );
  }
  
  export default Product;