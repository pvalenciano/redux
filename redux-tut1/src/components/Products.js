import React, { Component } from 'react';
import '../styles/Products.css';

const Product = ({ productProd }) => {
    const { name, description, product_img } = productProd;
    return (
        <div className="col-sm-3">
            <div className="Product">
                <div className="card">
                    <img className="product_img" src={product_img} alt={product_img}></img>
                    <p>{description}</p>
                </div>
                <p><b>{name}</b> </p><h2>100$</h2>
            </div>
        </div>
    );
}

const Products = ({ productProducts }) => {
    // const userToUpdate = "PAULAAA";
    // store.dispatch(updateUserAction(userToUpdate));


    return (

        <aside className="products">
            <div className="row">
                {productProducts.map(pr => <Product productProd={pr} key={pr.product_id} />)}

            </div>

        </aside >


    );

}

export default Products;
