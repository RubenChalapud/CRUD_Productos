import React, { useEffect, useState } from 'react';
import ProductForm from "../ProductForm/ProductForm";

import { db } from "../../App";

function Product() {

    const [products, setProducts] = useState([]);

    const [currentId, setCurrentId] = useState('');

    //Defición de tareas, guardar datos y actualizar datos
    const Task = async (productObject) =>{
        if (currentId === ''){
            await db.collection('Products').doc().set(productObject);
        } else {
            await db.collection('Products').doc(currentId).update(productObject);
        }
        setCurrentId('');
    }

    //Obtener toda la colecion de datos de la base de datos
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

    //Metodo para eliminar un producto
    const DeleteProduct = async (id) =>{
        if(window.confirm('¿Estás seguro de eliminar el producto?')){
            await db.collection('Products').doc(id).delete();
        }
    };

    useEffect(()=>{
        getProducts();
    }, []);

    return (
        <div className="row">
            <ProductForm {...{Task, currentId, products}}></ProductForm>
            <div className="col-md-8 p-2">
                {products.map(product => (
                   <div className="card card-columns mb-1" key={product.id}>
                       <div className="card-body">
                           <div className="d-flex justify-content-between">
                            <h2 className="card-title">{product.name}</h2>
                            <div>
                            <i className="material-icons" 
                            onClick={() => setCurrentId(product.id)}>mode_edit</i>
                            <i className="material-icons text-danger" 
                            onClick={() => DeleteProduct(product.id)}>delete</i>
                            </div>
                           </div>
                           <p className="card-text">{product.description}</p>
                           <div className="d-flex justify-content-between">
                            <h4>Stock: {product.stock}</h4>
                            <h4>${product.price}</h4>
                           </div>
                       </div>
                   </div> 
                ))}
            </div>
        </div>
    );
  }
  
  export default Product;