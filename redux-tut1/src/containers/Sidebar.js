import React from 'react';
import '../styles/Sidebar.css';
import User from "../components/User";
import Cart from "../components/Cart";
const Sidebar = ({ user, shoppingCartOpen }) => {
    console.log("user state: ", user);
    console.log("shoppingCartOpen state: ", shoppingCartOpen);


    return (
        <aside className="Sidebar" >
            {shoppingCartOpen ?
                <Cart></Cart>


                :
                <User user={user} ></User>
            }





        </aside >

    );

}

export default Sidebar;
