// src/context/InvoiceContext.js
import React, { createContext, useState } from 'react';

export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
    const [customers, setCustomers] = useState([]);
    const [invoices, setInvoices] = useState([]);

    const addCustomer = (customer) => {
        setCustomers([...customers, { ...customer, id: Date.now() }]);
    };

    const deleteCustomer = (id) => {
        setCustomers(customers.filter((customer) => customer.id !== id));
    };

    const updateCustomer = (id, updatedCustomer) => {
        setCustomers(customers.map((customer) =>
            customer.id === id ? { ...customer, ...updatedCustomer } : customer
        ));
    };

    const findCustomer = (name, email, mobile, town) => {
        return customers.find((customer) =>
            customer.name === name &&
            customer.email === email &&
            customer.mobile === mobile &&
            customer.town === town
        );
    };

    const addInvoice = (invoice) => {
        const { customer } = invoice;
        let existingCustomer = findCustomer(
            customer.name,
            customer.email,
            customer.mobile,
            customer.town
        );

        if (!existingCustomer) {
            existingCustomer = { ...customer, id: Date.now() };
            addCustomer(existingCustomer);
        }

        setInvoices([...invoices, { ...invoice, customer: existingCustomer }]);
    };

    return (
        <InvoiceContext.Provider value={{ customers, addCustomer, deleteCustomer, updateCustomer, invoices, addInvoice }}>
            {children}
        </InvoiceContext.Provider>
    );
};
