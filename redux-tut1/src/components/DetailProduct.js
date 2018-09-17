import React from 'react';
import '../styles/Main.css';
import store from '../store/Index';
const DetailProduct = ({ activeProduct }) => {
    const state = store.getState();
    const active = state.openDetail;
    const { product_id } = active;
    const { name, description, product_img, price } = product_id;
    return (

        <div className="DetailProduct">
            <div className="container">
                <div class="row">
                    <div class="col-12 col-md-8"><h2>{name}</h2></div>
                    <div class="col-6 col-md-4">{price}$</div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-8">
                        <img src= {product_img} alt={product_img}></img>
                    </div>
                    <div class="col-6 col-md-4">{description}</div>
                </div>


            </div>

        </div>)

};

export default DetailProduct;
