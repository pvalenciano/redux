import React from 'react';
import '../styles/Main.css';
import Products from '../components/Products';

const Main = ({ productMain }) => {
    console.log("main");

    // const renderMainContent = () => {

    // }
    // return <main className="Main">{renderMainContent()}</main>;
    return (
        <div className="Main">
            <Products productProducts={productMain}></Products>
        </div>
    );





}

export default Main;
