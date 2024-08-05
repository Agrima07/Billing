// src/components/NewInvoice.js
import React, { useState, useContext } from 'react';
import { InvoiceContext } from '../context/InvoiceContext';

const NewInvoice = ({ setView }) => {
    const [issueDate, setIssueDate] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('unpaid');
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerMobile, setCustomerMobile] = useState('');
    const [customerTown, setCustomerTown] = useState('');
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [subtotal, setSubtotal] = useState('');
    const { addInvoice } = useContext(InvoiceContext);

    const calculateSubtotal = () => {
        return (quantity && price) ? (quantity * price).toFixed(2) : '0.00';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!issueDate || !dueDate || !customerName || !customerEmail || !customerMobile || !productName || !quantity || !price) {
            alert('Please fill in all required fields');
            return;
        }

        const calculatedSubtotal = calculateSubtotal();
        const newInvoice = {
            issueDate,
            dueDate,
            status,
            customer: {
                name: customerName,
                email: customerEmail,
                mobile: customerMobile,
                town: customerTown
            },
            product: {
                name: productName,
                quantity,
                price,
                subtotal: calculatedSubtotal
            },
            paid: status === 'paid'
        };
        addInvoice(newInvoice);
        setView('invoices'); // Redirect to invoices view
    };

    return (
        <div className="content">
            <h2>Create New Invoice</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row horizontal-group">
                    <label>
                        Issue Date:
                        <input
                            type="date"
                            value={issueDate}
                            onChange={(e) => setIssueDate(e.target.value)}
                        />
                    </label>
                    <label>
                        Due Date:
                        <input
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </label>
                    <label>
                        Invoice Status:
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="paid">Paid Invoice</option>
                            <option value="unpaid">Unpaid Invoice</option>
                        </select>
                    </label>
                </div>
                <h3>Customer Information</h3>
                <label>
                    Name:
                    <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Mobile:
                    <input
                        type="tel"
                        value={customerMobile}
                        onChange={(e) => setCustomerMobile(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Town:
                    <input
                        type="text"
                        value={customerTown}
                        onChange={(e) => setCustomerTown(e.target.value)}
                        required
                    />
                </label>
                <h3>Product Details</h3>
                <label>
                    Product Name:
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Quantity:
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => {
                            setQuantity(e.target.value);
                            setSubtotal(calculateSubtotal());
                        }}
                        required
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => {
                            setPrice(e.target.value);
                            setSubtotal(calculateSubtotal());
                        }}
                        required
                    />
                </label>
                <p><strong>Sub-Total:</strong> {calculateSubtotal()}</p>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default NewInvoice;
