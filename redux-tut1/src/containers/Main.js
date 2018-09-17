import React from 'react';
import '../styles/Main.css';
import Products from '../components/Products';
import DetailProduct from '../components/DetailProduct';
const Main = ({ productMain, detailOpen }) => {

    console.log("detailOpen: ", detailOpen);

    // return <div className="Main">
    //     <Products productProducts={productMain}></Products></div>

    const renderMainContent = () => {
        if (!detailOpen) {
            return <Products productProducts={productMain}></Products>;

        } else {
            return <DetailProduct activeProduct={detailOpen}></DetailProduct>;

        }
    }
    return <main className="Main">{renderMainContent()}</main>;

};

export default Main;
