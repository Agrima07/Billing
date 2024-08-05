import React, { useState, useContext } from 'react';
import { InvoiceContext } from '../context/InvoiceContext';


const Customers = () => {
    const { customers, addCustomer, deleteCustomer, updateCustomer } = useContext(InvoiceContext);
    const [showForm, setShowForm] = useState(false);
    const [editingCustomer, setEditingCustomer] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [town, setTown] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const customerData = { name, email, mobile, town };

        if (editingCustomer) {
            updateCustomer(editingCustomer.id, customerData);
            setEditingCustomer(null);
        } else {
            addCustomer(customerData);
        }

        setName('');
        setEmail('');
        setMobile('');
        setTown('');
        setShowForm(false);
    };

    const handleEdit = (customer) => {
        setEditingCustomer(customer);
        setName(customer.name);
        setEmail(customer.email);
        setMobile(customer.mobile);
        setTown(customer.town);
        setShowForm(true);
    };

    return (
        <div className="content">
            <h2>Customers List</h2>
            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Cancel' : 'New Customer'}
            </button>
            {showForm && (
                <div className="form-container">
                    <h3>{editingCustomer ? 'Edit Customer Details' : 'New Customer Details'}</h3>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Mobile:
                            <input
                                type="tel"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Town:
                            <input
                                type="text"
                                value={town}
                                onChange={(e) => setTown(e.target.value)}
                                required
                            />
                        </label>
                        <button type="submit">{editingCustomer ? 'Update' : 'Submit'}</button>
                    </form>
                </div>
            )}
            <table className="customer-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Town</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index) => (
                        <tr key={index}>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.mobile}</td>
                            <td>{customer.town}</td>
                            <td>
                                <button className="action-button" onClick={() => handleEdit(customer)}>✎</button>
                                <button className="action-button" onClick={() => deleteCustomer(customer.id)}>🗑</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Customers;





