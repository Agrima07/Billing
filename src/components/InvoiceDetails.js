// src/components/InvoiceDetails.js
import React from 'react';


const InvoiceDetails = ({ invoice }) => {
    return (
        <div className="content">
            <h2>Invoice Details</h2>
            <div className="invoice-summary">
                <h3>Invoice Information</h3>
                <p><strong>Issue Date:</strong> {invoice.issueDate}</p>
                <p><strong>Due Date:</strong> {invoice.dueDate}</p>
                <h3>Customer Information</h3>
                <p><strong>Name:</strong> {invoice.customer.name}</p>
                <p><strong>Email:</strong> {invoice.customer.email}</p>
                <p><strong>Mobile:</strong> {invoice.customer.mobile}</p>
                <p><strong>Town:</strong> {invoice.customer.town}</p>
                <h3>Product Details</h3>
                <p><strong>Product Name:</strong> {invoice.product.name}</p>
                <p><strong>Quantity:</strong> {invoice.product.quantity}</p>
                <p><strong>Price:</strong> {invoice.product.price}</p>
                <p><strong>Sub-Total:</strong> {invoice.product.subtotal}</p>
            </div>
        </div>
    );
};

export default InvoiceDetails;
