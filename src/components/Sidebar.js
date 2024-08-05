// src/components/Sidebar.js
import React from 'react';


const Sidebar = ({ setView }) => {
    return (
        <div className="sidebar">
            <ul>
                <li><button onClick={() => setView('invoices')}>Invoices</button></li>
                <li><button onClick={() => setView('customers')}>Customers</button></li>
                <li><button onClick={() => setView('all')}>All Invoices</button></li>
            </ul>
        </div>
    );
};

export default Sidebar;
