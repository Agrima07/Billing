import React, { useContext, useState } from 'react';
import { InvoiceContext } from '../context/InvoiceContext';
import PrintInvoice from './PrintInvoice';

const AllInvoices = () => {
    const { invoices } = useContext(InvoiceContext);
    const [invoiceToPrint, setInvoiceToPrint] = useState(null);

    const handlePrint = (invoice) => {
        setInvoiceToPrint(invoice);
        const printWindow = window.open('', '', 'height=600,width=800');
        
        printWindow.document.open();
        printWindow.document.write('<html><head><title>Print Invoice</title>');
        printWindow.document.write('<link rel="stylesheet" type="text/css" href="/path/to/PrintInvoice.css">'); // Adjust the path if needed
        printWindow.document.write('</head><body >');
        printWindow.document.write('<div id="print-content">');
        
        // Write the invoice content directly
        printWindow.document.write(`
            <div class="print-invoice">
                <h1>Invoice</h1>
                <h2>Invoice Details</h2>
                <p><strong>Issue Date:</strong> ${invoice.issueDate}</p>
                <p><strong>Due Date:</strong> ${invoice.dueDate}</p>
                <h3>Customer Information</h3>
                <p><strong>Name:</strong> ${invoice.customer.name}</p>
                <p><strong>Email:</strong> ${invoice.customer.email}</p>
                <p><strong>Mobile:</strong> ${invoice.customer.mobile}</p>
                <p><strong>Town:</strong> ${invoice.customer.town}</p>
                <h3>Product Details</h3>
                <p><strong>Product Name:</strong> ${invoice.product.name}</p>
                <p><strong>Quantity:</strong> ${invoice.product.quantity}</p>
                <p><strong>Price:</strong> ${invoice.product.price}</p>
                <p><strong>Sub-Total:</strong> ${invoice.product.subtotal}</p>
                <p><strong>Status:</strong> ${invoice.paid ? 'Paid' : 'Unpaid'}</p>
            </div>
        `);
        
        printWindow.document.write('</div>');
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        
        printWindow.focus();
        printWindow.print();
    };

    return (
        <div className="content">
            <h2>All Invoices</h2>
            <div className="invoice-summary">
                <div className="summary-box">
                    <h3>Paid Invoices</h3>
                    <div className="summary-count">{invoices.filter(invoice => invoice.paid).length}</div>
                </div>
                <div className="summary-box">
                    <h3>Unpaid Invoices</h3>
                    <div className="summary-count">{invoices.filter(invoice => !invoice.paid).length}</div>
                </div>
                <div className="summary-box">
                    <h3>Total Invoices</h3>
                    <div className="summary-count">{invoices.length}</div>
                </div>
            </div>
            <div className="invoice-list">
                {invoices.map(invoice => (
                    <div key={invoice.issueDate} className="invoice-item">
                        <h3>Invoice from {invoice.issueDate}</h3>
                        <button onClick={() => handlePrint(invoice)}>Print</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllInvoices;
