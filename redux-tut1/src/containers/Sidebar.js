import React from 'react';
import '../styles/Sidebar.css';
import User from "../components/User";

const Sidebar = ({ user }) => {
    return (

        <aside className="Sidebar" >
            {/* {users.map(us => <User user={us} />) } */}
            <User user={user} ></User>
        </aside >
      
    );

}

export default Sidebar;
