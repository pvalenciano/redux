import React from 'react';
import '../styles/Sidebar.css';
import User from '../containers/User';

const Sidebar = ({ contacts }) => {


    // const c = contacts.map(contact => {
    //     return <User />
    // });
    // contacts.map(contact => <User />)

    // console.log("contacts: ", contacts);

    return (
        <aside className="Sidebar">
            {contacts.map(contact => <User user={contact} key={contact.user_id} />)}
        </aside>

    );

}

export default Sidebar;
