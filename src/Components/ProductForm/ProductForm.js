import React, { useState } from 'react';


function ProductForm(props) {

    const initialStateValues = {
        name:'',
        description:'',
        stock:'',
        price:''
    };

    const [values, setValues] = useState(initialStateValues);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.Task(values);
        setValues({...initialStateValues})
    }

    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <input type="text" className="form-control" 
                placeholder="Nombre de producto" name="name"
                onChange={handleChange} value={values.name}></input>
            </div>
            <div className="form-group">
                <textarea className="form-control" placeholder="Escribe una descripción" 
                name="description" rows="2"
                onChange={handleChange} value={values.description}></textarea>
            </div>
            <div className="form-group input-group">
                <input type="text" className="form-control" 
                placeholder="Stock de producto" name="stock"
                onChange={handleChange} value={values.stock}></input>
            </div>
            <div className="form-group input-group">
                <input type="text" className="form-control" 
                placeholder="Precio de producto" name="price"
                onChange={handleChange} value={values.price}></input>
            </div>

            <button className="btn btn-primary btn-block">
                Guardar
            </button>
        </form>
    );
  }
  
  export default ProductForm;