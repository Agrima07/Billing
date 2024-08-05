// src/components/Invoices.js
import React, { useContext } from 'react';
import { InvoiceContext } from '../context/InvoiceContext';

const Invoices = ({ setView }) => {
    const { invoices } = useContext(InvoiceContext);

    return (
        <div className="content">
            <button className="create-invoice-button" onClick={() => setView('new-invoice')}>
                Create New Invoice
            </button>
            <h2>Invoices</h2>
            <ul className="invoice-list">
                {invoices.map((invoice, index) => (
                    <li key={index} className="invoice-item">
                        <p><strong>Customer:</strong> {invoice.customer.name}</p>
                        <p><strong>Email:</strong> {invoice.customer.email}</p>
                        <p><strong>Mobile:</strong> {invoice.customer.mobile}</p>
                        <p><strong>Town:</strong> {invoice.customer.town}</p>
                        <p><strong>Product:</strong> {invoice.product.name}</p>
                        <p><strong>Quantity:</strong> {invoice.product.quantity}</p>
                        <p><strong>Price:</strong> {invoice.product.price}</p>
                        <p><strong>Sub-Total:</strong> {invoice.product.subtotal}</p>
                        <p><strong>Issue Date:</strong> {invoice.issueDate}</p>
                        <p><strong>Due Date:</strong> {invoice.dueDate}</p>
                        <p><strong>Invoice Status:</strong> {invoice.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Invoices;
