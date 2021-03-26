import React, { useEffect, useState } from 'react';
import ProductForm from "../ProductForm/ProductForm";

import { db } from "../../App";

function Product() {

    const [products, setProducts] = useState([]);

    const [currentId, setCurrentId] = useState('');

    const Task = async (productObject) =>{
        if (currentId === ''){
            await db.collection('Products').doc().set(productObject);
        } else {
            await db.collection('Products').doc(currentId).update(productObject);
        }
        setCurrentId('');
    }

    const getProducts = async () =>{
        db.collection('Products').onSnapshot(
            (querySnapshot) => {
                const docs = [];
                querySnapshot.forEach((doc) =>{
                    docs.push({...doc.data(), id:doc.id});
                });
                setProducts(docs);
            });
    };

    const DeleteProduct = async (id) =>{
        if(window.confirm('¿Estás seguro de eliminar el producto?')){
            await db.collection('Products').doc(id).delete();
        }
    };

    useEffect(()=>{
        getProducts();
    }, []);

    return (
        <div>
            <ProductForm {...{Task, currentId, products}}></ProductForm>
            <h1>Product</h1>
            <div className="col-md-16 p-2">
                {products.map(product => (
                   <div className="card mb-1" key={product.id}>
                       <div className="card-body">
                           <div className="d-flex justify-content-between">
                            <h4>{product.name}</h4>
                            <div>
                            <i className="material-icons" 
                            onClick={() => setCurrentId(product.id)}>mode_edit</i>
                            <i className="material-icons text-danger" 
                            onClick={() => DeleteProduct(product.id)}>delete</i>
                            </div>
                           </div>
                           <p>{product.description}</p>
                           <p>{product.stock}</p>
                           <p>{product.price}</p>
                       </div>
                   </div> 
                ))}
            </div>
        </div>
    );
  }
  
  export default Product;