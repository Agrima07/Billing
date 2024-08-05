// src/App.js
import React, { useState } from 'react';
import { InvoiceProvider } from './context/InvoiceContext';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Invoices from './components/Invoices';
import NewInvoice from './components/NewInvoice';
import Customers from './components/Customers';
import AllInvoices from './components/AllInvoices';
import './styles.css';

const App = () => {
    const [view, setView] = useState('dashboard');

    const renderView = () => {
        switch (view) {
            case 'invoices':
                return <Invoices setView={setView} />;
            case 'new-invoice':
                return <NewInvoice setView={setView} />;
            case 'customers':
                return <Customers />;
            case 'all':
                return <AllInvoices />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <InvoiceProvider>
            <div className="app-container">
                <Sidebar setView={setView} />
                <div className="main-content">
                    {renderView()}
                </div>
            </div>
        </InvoiceProvider>
    );
};

export default App;
